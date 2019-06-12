import { Component } from "@angular/core";
import { Subject } from "src/app/common/classes/subject";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { SubjectsState } from "../../../redux/subjects.state";

@Component({
  selector: "app-subjects-list",
  templateUrl: "./subjects-list.component.html",
  styleUrls: ["./subjects-list.component.less"]
})
export class SubjectsListComponent {
  public subjects: Observable<Subject[]>;

  constructor(private store: Store<SubjectsState>) {
    this.subjects = store.pipe(select("subjects"));

  }

}
