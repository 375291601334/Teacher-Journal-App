import { Component } from "@angular/core";
import { Student } from "src/app/common/classes/student";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { StudentsState } from "../../../redux/students.state";

@Component({
  selector: "app-students-list",
  templateUrl: "./students-list.component.html",
  styleUrls: ["./students-list.component.less"]
})
export class StudentsListComponent {
  public students: Observable<Student[]>;

  constructor(private store: Store<StudentsState>) {
    this.students = store.pipe(select("students"));
  }

}
