import { Component, Input } from "@angular/core";
import { Student } from "../../../../common/classes/student";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { StudentsState } from "../../../../redux/students.state";

@Component({
  selector: "app-students-table",
  templateUrl: "./students-table.component.html",
  styleUrls: ["./students-table.component.less"]
})
export class StudentsTableComponent {
  public students: Observable<Student[]>;

  constructor(private store: Store<StudentsState>) {
    this.students = store.pipe(select("students"));
  }

}
