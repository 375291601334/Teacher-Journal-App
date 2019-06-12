import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Student } from "src/app/common/classes/student";
import { Subject, Marks } from "src/app/common/classes/subject";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { StudentsState } from "../../../../redux/students.state";
import { SubjectsState } from "../../../../redux/subjects.state";

@Component({
  selector: "app-subject-table",
  templateUrl: "./subject-table.component.html",
  styleUrls: ["./subject-table.component.less"]
})
export class SubjectTableComponent implements OnInit {
  public students: Observable<Student[]>;
  public studentsArr: Student[];
  public subject: Subject;
  public subjectName: string;
  public averageMarks: number[];

  constructor(public route: ActivatedRoute, private studStore: Store<StudentsState>, private subjStore: Store<SubjectsState>) {
    this.route.params.subscribe(params => {
      this.subjectName = params.id;
    });

    this.students = studStore.pipe(select("students"));

    subjStore.pipe(select("subjects")).subscribe( (subjects) =>
      [this.subject] = subjects.filter( (subject: Subject) => (subject.name === this.subjectName))
    );

    studStore.pipe(select("students")).subscribe( (sudents) => this.studentsArr = sudents);
    this.averageMarks = [];
  }

  public ngOnInit(): void {
    this.averageMarks = this.studentsArr.map( (student: Student, id: number) => this.getAverageBall(id));
  }

  public addColumn(): void {
    this.subject.marks.push(
      {
        date: "00/00",
        studentsMarks: Array(this.studentsArr.length),
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
