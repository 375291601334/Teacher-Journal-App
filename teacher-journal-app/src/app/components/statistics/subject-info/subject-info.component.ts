import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject, Marks } from "src/app/common/classes/subject";

import { Store, select } from "@ngrx/store";
import { SubjectsState } from "../../../redux/subjects.state";

@Component({
  selector: "app-subject-info",
  templateUrl: "./subject-info.component.html",
  styleUrls: ["./subject-info.component.less"]
})
export class SubjectInfoComponent {
  public subjectName: string;
  public subject: Subject;
  public averageBall: number;

  constructor(private store: Store<SubjectsState>, public route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.subjectName = params.id;
      store.pipe(select("subjects")).subscribe( (subjects) =>
        [this.subject] = subjects.filter( (subject: Subject) => (subject.name === this.subjectName))
      );
      this.averageBall = this.getAverageBall();
    });
  }

  public getAverageBall(): number {
    let count: number = 0, sum: number = 0;

    this.subject.marks.forEach( (marksObj: Marks) => {
        marksObj.studentsMarks.forEach( (mark) => {
          if (typeof mark === "number") {
            sum = sum + mark;
            count += 1;
          }
        });
      });

    if (count > 0) {
        return (sum / count);
      } else {
        return 0;
      }
  }

}
