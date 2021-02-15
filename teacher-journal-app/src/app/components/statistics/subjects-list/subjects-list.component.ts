import { Component } from "@angular/core";
import { Subject } from "src/app/common/classes/subject";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { State} from "../../../redux/reducers/combineReducers";
import { selectSubjects } from "src/app/redux/selectors/subjects.selectors";

@Component({
  selector: "app-subjects-list",
  templateUrl: "./subjects-list.component.html",
  styleUrls: ["./subjects-list.component.less"]
})
export class SubjectsListComponent {
  public subjects: Observable<Subject[]>;

  constructor(private store: Store<State>) {
    this.subjects = store.select(selectSubjects);
  }

}
