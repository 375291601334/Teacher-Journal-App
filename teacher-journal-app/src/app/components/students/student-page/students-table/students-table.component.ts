import { Component } from "@angular/core";
import { Student } from "../../../../common/classes/student";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { StudentsState } from "../../../../redux/students.state";
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

  constructor(private store: Store<StudentsState>, private sortPipe: SortPipe) {
    store.pipe(select("students"))
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
