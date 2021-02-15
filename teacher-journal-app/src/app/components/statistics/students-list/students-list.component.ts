import { Component } from "@angular/core";
import { DataService } from "../../../common/services/data.service";
import { Student } from "src/app/common/classes/student";

@Component({
  selector: "app-students-list",
  templateUrl: "./students-list.component.html",
  styleUrls: ["./students-list.component.less"]
})
export class StudentsListComponent {
  public students: Student[];

  constructor(private dataService: DataService) {
    this.students = this.dataService.getStudents();
  }

}
