import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "src/app/common/classes/subject";
import { AverageMarksCalculationsService } from "../../../common/services/average-marks-calculations.service";

import { Store } from "@ngrx/store";
import { State } from "../../../redux/reducers/combineReducers";
import { LoadSubjects } from "src/app/redux/actions/subjects.actions";
import { selectSubjects } from "src/app/redux/reducers/combineReducers";

@Component({
  selector: "app-subject-info",
  templateUrl: "./subject-info.component.html",
  styleUrls: ["./subject-info.component.less"]
})
export class SubjectInfoComponent {
  public subjectName: string;
  public subject: Subject;
  public averageBall: number;

  constructor(private store: Store<State>,
              private averageMarkaCalculations: AverageMarksCalculationsService,
              public route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.subjectName = params.id;

      store.dispatch(new LoadSubjects());
      store.select(selectSubjects)
           .subscribe( (subjects) =>
                        [this.subject] = subjects.filter( (subject: Subject) => (subject.name === this.subjectName))
                      );

      this.averageBall = this.averageMarkaCalculations.getSubjectAverageBall(this.subject);
    });
  }

}
