import { Component } from "@angular/core";
import { Student } from "../../../../common/classes/student";

import { Store } from "@ngrx/store";
import { State, selectStudents } from "../../../../redux/reducers/combineReducers";
import { LoadStudents } from "../../../../redux/actions/students.actions";

import { SortPipe } from "../../../../common/pipes/sort.pipe";

@Component({
  selector: "app-students-table",
  templateUrl: "./students-table.component.html",
  styleUrls: ["./students-table.component.less"]
})
export class StudentsTableComponent {
  public students: Student[];
  public sortingField: string;
  public isDesc: boolean;

  constructor(private store: Store<State>, private sortPipe: SortPipe) {
    this.store.select(selectStudents)
         .subscribe( students => this.students = students);
    this.store.dispatch(new LoadStudents());
    this.sortingField = "id";
    this.isDesc = false;
  }

  public setDescSortingField(field: string): void {
    this.sortingField = field;
    this.isDesc = true;
    this.students = this.sortPipe.transform(this.students, this.sortingField, this.isDesc );
  }

  public setAscSortingField(field: string): void {
    this.sortingField = field;
    this.isDesc = false;
    this.students = this.sortPipe.transform(this.students, this.sortingField, this.isDesc );
  }
}
