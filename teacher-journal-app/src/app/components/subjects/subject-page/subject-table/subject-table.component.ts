import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SaveChangesDialogService } from "../../../../common/services/save-changes-dialog.service";
import { getStudentAverageBall } from "../../../../common/helpers/calculationFunctions";
import { Student } from "src/app/common/classes/student";
import { Subject } from "src/app/common/classes/subject";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { StudentsState } from "../../../../redux/students.state";
import { SubjectsState } from "../../../../redux/subjects.state";
import * as DataActions from "../../../../redux/subjects.actions";

@Component({
  selector: "app-subject-table",
  templateUrl: "./subject-table.component.html",
  styleUrls: ["./subject-table.component.less"]
})

export class SubjectTableComponent implements OnInit {
  //@Select studentSelectState
  public students: Observable<Student[]>;
  public studentsArr: Student[];
  public oldSubject: Subject;
  public newSubject: Subject;
  public subjectName: string;
  public averageMarks: number[];

  constructor(public route: ActivatedRoute,
              private studStore: Store<StudentsState>,
              private subjStore: Store<SubjectsState>,
              private dialogService: SaveChangesDialogService) {
    this.route.params.subscribe(params => {
      this.subjectName = params.id;
    });
    this.averageMarks = [];
  }

  public ngOnInit(): void {
    this.students = this.studStore.pipe(select("students"));

    // studentSelectState.subscribe
    this.subjStore.pipe(select("subjects")).subscribe( (subjects) =>
      [this.oldSubject] = subjects.filter( (subject: Subject) => (subject.name === this.subjectName))
    );
    this.newSubject = JSON.parse(JSON.stringify(this.oldSubject));

    this.studStore.pipe(select("students")).subscribe( (sudents) => this.studentsArr = sudents);
    this.averageMarks = this.studentsArr.map( (student: Student, id: number) => getStudentAverageBall(id, this.newSubject));
  }

  public addColumn(): void {
    this.newSubject.marks.push(
      {
        date: new Date().toJSON().slice(0, 10),
        studentsMarks: Array(this.studentsArr.length),
      }
    );
  }

  public saveChanges(): void {
    if (JSON.stringify(this.oldSubject) !== JSON.stringify(this.newSubject)) {
      this.oldSubject = JSON.parse(JSON.stringify(this.newSubject));
      this.subjStore.dispatch(new DataActions.updateSubject(this.newSubject));
    }
  }

  public onMarkChange(studentId: number): void {
    this.averageMarks[studentId] = getStudentAverageBall(studentId, this.newSubject);
  }

  public canDeactivate(): Observable<boolean> | boolean {
    if (JSON.stringify(this.oldSubject) !== JSON.stringify(this.newSubject)) {
      return this.dialogService.confirm();
    } else {
      return true;
    }
  }

}
