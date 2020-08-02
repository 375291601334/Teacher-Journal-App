import { Component } from "@angular/core";
import { Student } from "../../../../common/classes/student";

import { Store } from "@ngrx/store";
import { State } from "../../../../redux/reducers/combineReducers";
import { selectStudents } from "../../../../redux/selectors/students.selectors";

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
  public tableColumns: { name: string; field: string; }[] = [
    {name: "Id", field: "id"},
    {name: "Name", field: "name.first"},
    {name: "Last Name", field: "name.last"},
    {name: "Address", field: "address"},
  ];

  constructor(private store: Store<State>, private sortPipe: SortPipe) {
    this.store.select(selectStudents)
         .subscribe( students => this.students = students);
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
