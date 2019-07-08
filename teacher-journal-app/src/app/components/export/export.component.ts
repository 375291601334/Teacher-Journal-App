import { Component } from "@angular/core";
import * as jsPDF from "jspdf";
import "jspdf-autotable";
import { Store } from "@ngrx/store";
import { State } from "src/app/redux/reducers/combineReducers";
import { selectStudents } from "src/app/redux/selectors/students.selectors";
import { Student } from "src/app/common/classes/student";
import { Subject } from "src/app/common/classes/subject";
import { selectSubjects } from "src/app/redux/selectors/subjects.selectors";
import * as XLSX from "xlsx";

@Component({
  selector: "app-export",
  templateUrl: "./export.component.html",
  styleUrls: ["./export.component.less"]
})
export class ExportComponent {
  public title: string = "Report";
  public students: Student[];
  public subjects: Subject[];

  constructor(// private excelService: ExcelService
              private store: Store<State>) {
    this.store.select(selectStudents).subscribe(students => this.students = students );
    this.store.select(selectSubjects).subscribe(subjects => this.subjects = subjects );
  }

  public PdfExport(): void {
    const doc: jsPDF = new jsPDF();

    doc.text("Teacher Journal", 90, 10);

    doc.text(10, 20, "Students:");
    let studentsTableContent: any[] = [];
    this.students.forEach( student => {
      studentsTableContent.push( [ student._id, student.name.first + " " + student.name.last, student.address ] );
    });
    doc.autoTable({
      startY: 25,
      head: [["Id", "Name", "Address"]],
      body: studentsTableContent
    });

    let finalY: number = doc.autoTable.previous.finalY;
    doc.text(10, finalY + 15, "Subjects:");
    let subjetcsTableContent: any[] = [];
    this.subjects.forEach( subject => {
      subjetcsTableContent.push( [ subject.name, subject.teacher, subject.cabiner ] );
    });
    doc.autoTable({
      startY: finalY + 20,
      head: [["Name", "Teacher", "Cabiner"]],
      body: subjetcsTableContent
    });

    this.subjects.forEach( subject => {
      finalY = doc.autoTable.previous.finalY;
      doc.text(10, finalY + 15, `Marks for ${subject.name}:`);
      let marksTableHeader: any[] = [["Students:"]];
      let marksTableContent: any[] = [];

      this.students.forEach( student => {
        marksTableContent.push( [ student.name.first + " " + student.name.last ] );
      });
      subject.marks.forEach( (marksObj) => {
        marksTableHeader[0].push( marksObj.date );
        marksObj.studentsMarks.forEach( ( mark, index ) => {
          marksTableContent[index].push(mark);
        });
      });

      doc.autoTable({
        startY: finalY + 20,
        head: marksTableHeader,
        body: marksTableContent
      });
    });

    doc.save("Journal.pdf");
  }

  public ExcelExport(): void {

    let studentsTableContent: any[] = [["Id", "Name", "Address"]];
    this.students.forEach( student => {
      studentsTableContent.push( [ student._id, student.name.first + " " + student.name.last, student.address ] );
    });

    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    const worksheetForStudents: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(studentsTableContent);
    const colsWidthForStudents: any[] = [
      {wch: 5},
      {wch: 15},
      {wch: 50}
    ];
    worksheetForStudents["!cols"] = colsWidthForStudents;
    XLSX.utils.book_append_sheet(workbook, worksheetForStudents, "students");

    let subjetcsTableContent: any[] = [["Name", "Teacher", "Cabiner"]];
    this.subjects.forEach( subject => {
      subjetcsTableContent.push( [ subject.name, subject.teacher, subject.cabiner ] );
    });
    const worksheetForSubjetcs: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(subjetcsTableContent);
    const colsWidthForSubjects: any[] = [
      {wch: 10},
      {wch: 15},
      {wch: 10}
    ];
    worksheetForSubjetcs["!cols"] = colsWidthForSubjects;
    XLSX.utils.book_append_sheet(workbook, worksheetForSubjetcs, "subjects");

    let index: number = 0;
    let marksTableContent: any[] = [];
    this.subjects.forEach( subject => {
      marksTableContent.push([`Marks for ${subject.name}:`], ["Students:"] );
      index += 2;
      this.students.forEach( student => {
        marksTableContent.push( [ student.name.first + " " + student.name.last ] );
      });
      subject.marks.forEach( (marksObj) => {
        marksTableContent[ index - 1 ].push( marksObj.date );
        marksObj.studentsMarks.forEach( ( mark, i ) => {
          marksTableContent[index + i].push(mark);
        });
      });

      index = index + this.students.length + 1;
      marksTableContent.push( [] );
    });

    const worksheetForMarks: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(marksTableContent);
    const colsWidthForMarks: any[] = [
      {wch: 20}
    ];
    worksheetForMarks["!cols"] = colsWidthForMarks;
    XLSX.utils.book_append_sheet(workbook, worksheetForMarks, "marks");

    XLSX.writeFile(workbook, "Journal.xlsx");

  }

}
