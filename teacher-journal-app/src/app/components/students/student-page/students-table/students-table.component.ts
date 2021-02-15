import { Component, Input } from "@angular/core";
import { Student } from "../../../../common/classes/student";

@Component({
  selector: "app-students-table",
  templateUrl: "./students-table.component.html",
  styleUrls: ["./students-table.component.less"]
})
export class StudentsTableComponent {
  @Input() public students: Student[];

}
