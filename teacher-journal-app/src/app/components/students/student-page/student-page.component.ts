import { Component, OnInit } from "@angular/core";
import { Student } from "src/app/common/classes/student";
import { DataService } from "../../../common/services/data.service";

@Component({
  selector: "app-student-page",
  templateUrl: "./student-page.component.html",
  styleUrls: ["./student-page.component.less"]
})
export class StudentPageComponent implements OnInit {
  public students: Student[];

  constructor(private dataService: DataService) {
    this.students = [];
  }

  public ngOnInit(): void {
    this.students = this.dataService.getStudents();
  }

}
