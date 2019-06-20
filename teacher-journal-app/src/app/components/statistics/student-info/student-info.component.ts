import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Student } from "src/app/common/classes/student";
import { Subject } from "src/app/common/classes/subject";
import { AverageMarksCalculationsService } from "../../../common/services/average-marks-calculations.service";

import { Store } from "@ngrx/store";
import { State } from "../../../redux/reducers/combineReducers";
import { selectSubjects, selectStudents } from "src/app/redux/reducers/combineReducers";
import { LoadSubjects } from "src/app/redux/actions/subjects.actions";
import { LoadStudents } from "src/app/redux/actions/students.actions";

@Component({
  selector: "app-student-info",
  templateUrl: "./student-info.component.html",
  styleUrls: ["./student-info.component.less"]
})
export class StudentInfoComponent {
  public studentFullName: string;
  public student: Student;
  public subjects: Subject[];
  public averageMarks: number[];

  constructor(public route: ActivatedRoute,
              private averageMarksCalculations: AverageMarksCalculationsService,
              private store: Store<State>) {
    store.dispatch(new LoadSubjects());
    store.dispatch(new LoadStudents());
    store.select(selectSubjects)
            .subscribe( (subjects) => this.subjects = subjects);

    this.route.params.subscribe(params => {
      this.studentFullName = params.id;

      store.select(selectStudents)
              .subscribe( students =>
                          [this.student] = students.filter( student => {
                            const nameSeparator: number = this.studentFullName.indexOf("_");
                            const lastName: string = this.studentFullName.slice(0, nameSeparator);
                            const firstName: string = this.studentFullName.slice(nameSeparator + 1, this.studentFullName.length);
                            return (student.name.last === lastName && student.name.first === firstName);
                          }
      ));

      this.averageMarks = this.subjects.map( subject => this.averageMarksCalculations.getStudentAverageBall(this.student.id, subject) );
    });
  }
}
