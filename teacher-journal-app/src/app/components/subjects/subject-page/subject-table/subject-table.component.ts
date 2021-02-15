import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../../../common/services/data.service";
import { ActivatedRoute } from "@angular/router";
import { Student } from "src/app/common/classes/student";
import { Subject, Marks } from "src/app/common/classes/subject";

@Component({
  selector: "app-subject-table",
  templateUrl: "./subject-table.component.html",
  styleUrls: ["./subject-table.component.less"]
})
export class SubjectTableComponent implements OnInit {
  public students: Student[];
  public subject: Subject;
  public subjectName: string;
  public averageMarks: number[];

  constructor(private dataService: DataService, public route: ActivatedRoute) {
    this.students = [];
    this.averageMarks = [];
    this.route.params.subscribe(params => {
      this.subjectName = params.id;
    });
  }

  public ngOnInit(): void {
    this.students = this.dataService.getStudents();
    [this.subject] = this.dataService.getSubjects().filter( (subject: Subject) => (subject.name === this.subjectName) );
    this.averageMarks = this.students.map( (student: Student, id: number) => this.getAverageBall(id) );
  }

  public addColumn(): void {
    this.subject.marks.push(
      {
        date: "",
        studentsMarks: Array(this.students.length),
      }
    );
  }

  public getAverageBall(studentId: number): number {
    let sum: number = 0, count: number = 0;

    this.subject.marks.forEach( (marksObj: Marks) => {
      if (typeof marksObj.studentsMarks[studentId] === "number") {
        sum = sum + marksObj.studentsMarks[studentId];
        count += 1;
      }
    });

    if (count > 0) {
      return sum / count;
    } else {
      return 0;
    }
  }

  public saveChanges(): void {}

  public onMarkChange(studentId: number): void {
    this.averageMarks[studentId] = this.getAverageBall(studentId);
  }

}
