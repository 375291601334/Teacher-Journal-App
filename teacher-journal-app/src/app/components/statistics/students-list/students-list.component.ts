import { Component } from "@angular/core";
import { Student } from "src/app/common/classes/student";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { State, selectStudents } from "../../../redux/reducers/combineReducers";
import { LoadStudents } from "src/app/redux/actions/students.actions";

@Component({
  selector: "app-students-list",
  templateUrl: "./students-list.component.html",
  styleUrls: ["./students-list.component.less"]
})
export class StudentsListComponent {
  public students: Observable<Student[]>;

  constructor(private store: Store<State>) {
    this.store.dispatch(new LoadStudents());
    this.students = store.select(selectStudents);
  }

}
