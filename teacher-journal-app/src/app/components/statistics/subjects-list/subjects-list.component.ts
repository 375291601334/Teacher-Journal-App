import { Component } from "@angular/core";
import { Subject } from "src/app/common/classes/subject";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { State, selectSubjects } from "../../../redux/reducers/combineReducers";
import { LoadSubjects } from "src/app/redux/actions/subjects.actions";

@Component({
  selector: "app-subjects-list",
  templateUrl: "./subjects-list.component.html",
  styleUrls: ["./subjects-list.component.less"]
})
export class SubjectsListComponent {
  public subjects: Observable<Subject[]>;

  constructor(private store: Store<State>) {
    store.dispatch(new LoadSubjects());
    this.subjects = store.select(selectSubjects);
  }

}
