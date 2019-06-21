import { Component } from "@angular/core";
import { Subject } from "src/app/common/classes/subject";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { State } from "../../../redux/reducers/combineReducers";
import { selectSubjects } from "src/app/redux/selectors/subjects.selectors";

@Component({
  selector: "app-subject-page",
  templateUrl: "./subject-page.component.html",
  styleUrls: ["./subject-page.component.less"]
})
export class SubjectPageComponent {
  public subjects$: Observable<Subject[]>;

  constructor(private store: Store<State>) {
    this.subjects$ = this.store.select(selectSubjects);
  }

}
