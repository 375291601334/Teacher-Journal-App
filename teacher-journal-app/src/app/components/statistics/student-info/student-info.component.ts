import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Student } from "src/app/common/classes/student";
import { Subject } from "src/app/common/classes/subject";
import { AverageMarksCalculationsService } from "../../../common/services/average-marks-calculations.service";

import { Store, select } from "@ngrx/store";
import { StudentsState } from "../../../redux/students.state";
import { SubjectsState } from "../../../redux/subjects.state";

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
              private studStore: Store<StudentsState>,
              private subjStore: Store<SubjectsState>) {
    subjStore.pipe(select("subjects"))
            .subscribe( (subjects) => this.subjects = subjects);

    this.route.params.subscribe(params => {
      this.studentFullName = params.id;

      studStore.pipe(select("students"))
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
