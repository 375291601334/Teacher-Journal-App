import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SaveChangesDialogService } from "../../../../common/services/dialog-window-service/save-changes-dialog.service";
import { AverageMarksCalculationsService } from "../../../../common/services/average-marks-calculations/average-marks-calculations.service";
import { Student } from "src/app/common/classes/student";
import { Subject, Marks } from "src/app/common/classes/subject";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { State } from "../../../../redux/reducers/combineReducers";
import { selectStudents } from "../../../../redux/selectors/students.selectors";
import { selectSubjects } from "../../../../redux/selectors/subjects.selectors";
import { UpdateSubject } from "../../../../redux/actions/subjects.actions";

@Component({
  selector: "app-subject-table",
  templateUrl: "./subject-table.component.html",
  styleUrls: ["./subject-table.component.less"]
})

export class SubjectTableComponent implements OnInit {
  // @Select studentSelectState
  public students: Student[];
  public oldSubject: Subject;
  public newSubject: Subject;
  public subjectName: string;
  public averageMarks: number[];
  public tableColumns: string[] = ["Name", "Last Name", "Average Mark"];

  constructor(public route: ActivatedRoute,
              private store: Store<State>,
              private dialogService: SaveChangesDialogService,
              private averageMarksCalculations: AverageMarksCalculationsService) {

    this.route.params
      .subscribe(params => {
        this.subjectName = params.id;
      });

    this.students = [];
    this.averageMarks = [];
  }

  public ngOnInit(): void {
    this.store.select(selectStudents)
        .subscribe( students => this.students = students);

    // studentSelectState.subscribe
    this.store.select(selectSubjects)
        .subscribe( (subjects) =>
                    [this.oldSubject] = subjects.filter( (subject: Subject) => (subject.name === this.subjectName))
                  );
    this.newSubject = JSON.parse(JSON.stringify(this.oldSubject));

    this.averageMarks = this.students
                            .map( (student: Student) =>
                                  this.averageMarksCalculations.getStudentAverageBall(student.id, this.newSubject));
  }

  public addColumn(): void {

    function getNextMaxDate(marks: Marks[]): string {
      let max: Date = marks.reduce(
        (maxdate: Date, marksObj: Marks) => {
          if ( new Date(marksObj.date) > maxdate ) {
            maxdate = new Date(marksObj.date);
          }
          return maxdate;
        },
        new Date("01.01.2019"));

      max.setDate(max.getDate() + 1);
      return new Date(max).toJSON().slice(0, 10);
    }

    this.newSubject.marks = [...this.newSubject.marks,
      {
        date: getNextMaxDate(this.newSubject.marks),
        studentsMarks: Array(this.students.length),
      }
    ];
  }

  public saveChanges(): void {
    if (JSON.stringify(this.oldSubject) !== JSON.stringify(this.newSubject)) {
      this.oldSubject = JSON.parse(JSON.stringify(this.newSubject));
      this.store.dispatch(new UpdateSubject(this.newSubject));
    }
  }

  public onMarkChange(studentId: number, event: any): void {
    this.averageMarks[studentId] = this.averageMarksCalculations.getStudentAverageBall(studentId, this.newSubject);
  }

  public canDeactivate(): Observable<boolean> | boolean {
    if (JSON.stringify(this.oldSubject) !== JSON.stringify(this.newSubject)) {
      return this.dialogService.confirm();
    } else {
      return true;
    }
  }

}
