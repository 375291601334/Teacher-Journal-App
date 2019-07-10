import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/redux/reducers/combineReducers";
import { selectStudents } from "src/app/redux/selectors/students.selectors";
import { Student } from "src/app/common/classes/student";
import { Subject } from "src/app/common/classes/subject";
import { selectSubjects } from "src/app/redux/selectors/subjects.selectors";
import * as XLSX from "xlsx";
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

@Component({
  selector: "app-export",
  templateUrl: "./export.component.html",
  styleUrls: ["./export.component.less"]
})
export class ExportComponent {
  public title: string = "Report";
  public students: Student[];
  public subjects: Subject[];

  constructor(private store: Store<State>) {
    this.store.select(selectStudents).subscribe(students => this.students = students );
    this.store.select(selectSubjects).subscribe(subjects => this.subjects = subjects );
  }

  private getInfoForStudentsTable(): [ string[], any[] ] {
    let content: any[] = [];
    this.students.forEach( student => {
      content.push( [ student._id, student.name.first + " " + student.name.last, student.address ] );
    });
    let header: string[] = ["Id", "Name", "Address"];
    return [ header, content ];
  }

  private getInfoForSubjectsTable(): [ string[], any[] ] {
    let content: any[] = [];
    this.subjects.forEach( subject => {
      content.push( [ subject.name, subject.teacher, subject.cabiner ] );
    });
    let header: string[] = ["Name", "Teacher", "Cabiner"];
    return [ header, content ];
  }

  private getInfoForMarksTable(subject: Subject): [ string[], any[] ] {
    let content: any[] = [];
    let header: string[] = ["Students:"];

    this.students.forEach( student => {
      content.push( [ student.name.first + " " + student.name.last ] );
    });
    subject.marks.forEach( (marksObj) => {
      header.push( marksObj.date );
      marksObj.studentsMarks.forEach( ( mark, index ) => {
        content[index].push(mark);
      });
    });
    return [ header, content ];
  }

  private addStudentsTableInPDF(doc: any): any {
    doc.text(10, 20, "Students:");
    let [ header, content ] = this.getInfoForStudentsTable();
    doc.autoTable({
      startY: 25,
      head: [header],
      body: content
    });
    return doc;
  }

  private addSubjectsTableInPDF(doc: any): any {
    let finalY: number = doc.autoTable.previous.finalY;
    doc.text(10, finalY + 15, "Subjects:");
    let [ header, content ] = this.getInfoForSubjectsTable();
    doc.autoTable({
      startY: finalY + 20,
      head: [header],
      body: content
    });
    return doc;
  }

  private addMarksTablesInPDF(doc: any): any {
    this.subjects.forEach( subject => {
      let finalY: number = doc.autoTable.previous.finalY;
      doc.text(10, finalY + 15, `Marks for ${subject.name}:`);
      let [header, content] = this.getInfoForMarksTable(subject);
      console.log(header, content);
      doc.autoTable({
        startY: finalY + 20,
        head: [header],
        body: content
      });
    });
    return doc;
  }

  private getStudentsWorksheet(): XLSX.WorkSheet {
    let [ header, content ] = this.getInfoForStudentsTable();
    const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet( [ header, ...content ] );
    const cols: any[] = [
      {wch: 5},
      {wch: 15},
      {wch: 50}
    ];
    worksheet["!cols"] = cols;
    return worksheet;
  }

  private getSubjectsWorksheet(): XLSX.WorkSheet {
    let [ header, content ] = this.getInfoForSubjectsTable();
    const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet( [ header, ...content ] );
    const cols: any[] = [
      {wch: 10},
      {wch: 15},
      {wch: 10}
    ];
    worksheet["!cols"] = cols;
    return worksheet;
  }

  private getMarksWorksheet(): XLSX.WorkSheet {
    let marksTableContent: any[] = [];
    this.subjects.forEach( subject => {
      marksTableContent.push([`Marks for ${subject.name}:`]);
      let [ header, content ] = this.getInfoForMarksTable(subject);
      marksTableContent.push(header);
      marksTableContent.push(...content);
      marksTableContent.push( [] );
    });
    const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(marksTableContent);
    const cols: any[] = [
      {wch: 20}
    ];
    worksheet["!cols"] = cols;
    return worksheet;
  }

  public PdfExport(): void {
    let doc: any = new jsPDF();
    doc.text("Teacher Journal", 90, 10);
    doc = this.addStudentsTableInPDF(doc);
    doc = this.addSubjectsTableInPDF(doc);
    doc = this.addMarksTablesInPDF(doc);
    doc.save("Journal.pdf");
  }

  public ExcelExport(): void {
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, this.getStudentsWorksheet(), "students");
    XLSX.utils.book_append_sheet(workbook, this.getSubjectsWorksheet(), "subjects");
    XLSX.utils.book_append_sheet(workbook, this.getMarksWorksheet(), "marks");
    XLSX.writeFile(workbook, "Journal.xlsx" );
  }

}
