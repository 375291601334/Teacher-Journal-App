import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../common/services/data.service";
import { Subject } from "src/app/common/classes/subject";

@Component({
  selector: "app-subject-page",
  templateUrl: "./subject-page.component.html",
  styleUrls: ["./subject-page.component.less"]
})
export class SubjectPageComponent implements OnInit {
  public subjects: Subject[];

  constructor(private dataService: DataService) {
    this.subjects = [];
  }

  public ngOnInit(): void {
    this.subjects = this.dataService.getSubjects();
  }

}
