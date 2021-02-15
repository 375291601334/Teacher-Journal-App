import { Component } from "@angular/core";
import { Student } from "src/app/common/classes/student";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { State } from "../../../redux/reducers/combineReducers";
import { selectStudents } from "src/app/redux/selectors/students.selectors";

@Component({
  selector: "app-students-list",
  templateUrl: "./students-list.component.html",
  styleUrls: ["./students-list.component.less"]
})
export class StudentsListComponent {
  public students: Observable<Student[]>;

  constructor(private store: Store<State>) {
    this.students = store.select(selectStudents);
  }

}
