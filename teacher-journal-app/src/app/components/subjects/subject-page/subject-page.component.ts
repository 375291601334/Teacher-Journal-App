import { Component } from "@angular/core";
import { Subject } from "src/app/common/classes/subject";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { SubjectsState } from "../../../redux/subjects.state";

@Component({
  selector: "app-subject-page",
  templateUrl: "./subject-page.component.html",
  styleUrls: ["./subject-page.component.less"]
})
export class SubjectPageComponent {
  public subjects: Observable<Subject[]>;

  constructor(private store: Store<SubjectsState>) {
    this.subjects = store.pipe(select("subjects"));
  }

}
