import { Component } from "@angular/core";
import { DataService } from "../../../common/services/data.service";
import { Subject } from "src/app/common/classes/subject";

@Component({
  selector: "app-subjects-list",
  templateUrl: "./subjects-list.component.html",
  styleUrls: ["./subjects-list.component.less"]
})
export class SubjectsListComponent {
  public subjects: Subject[];

  constructor(private dataService: DataService) {
    this.subjects = this.dataService.getSubjects();
  }

}
