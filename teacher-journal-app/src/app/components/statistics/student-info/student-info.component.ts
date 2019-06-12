import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../../common/services/data.service";
import { Student } from "src/app/common/classes/student";
import { Subject, Marks } from "src/app/common/classes/subject";

@Component({
  selector: "app-student-info",
  templateUrl: "./student-info.component.html",
  styleUrls: ["./student-info.component.less"]
})
export class StudentInfoComponent implements OnInit {
  public studentFullName: string;
  public student: Student;
  public subjects: Subject[];
  public averageMarks: number[];

  constructor(private dataService: DataService, public route: ActivatedRoute) {

    this.subjects = [];
    this.route.params.subscribe(params => {
      this.studentFullName = params.id;
      [this.student] = this.dataService.getStudents().filter(
        (student) => {
          return (student.name.last === this.studentFullName.slice(0, this.studentFullName.indexOf("_"))
          && student.name.first === this.studentFullName.slice(this.studentFullName.indexOf("_") + 1, this.studentFullName.length ));
        }
      );
      this.averageMarks = this.subjects.map( (subject) => {
        let sum: number = 0, count: number = 0;
        subject.marks.forEach( (marksObj: Marks) => {
          if (typeof marksObj.studentsMarks[this.student.id] === "number") {
            sum = sum + marksObj.studentsMarks[this.student.id];
            count += 1;
          }
        });
        if (count > 0) {
          return sum / count;
        } else {
          return 0;
        }
      });

    });

  }

  public ngOnInit(): void {
    this.subjects = this.dataService.getSubjects();
    this.averageMarks = this.subjects.map( (subject) => {
      let sum: number = 0, count: number = 0;
      subject.marks.forEach( (marksObj: Marks) => {
        if (typeof marksObj.studentsMarks[this.student.id] === "number") {
          sum = sum + marksObj.studentsMarks[this.student.id];
          count += 1;
        }
      });
      if (count > 0) {
        return sum / count;
      } else {
        return 0;
      }
    });
  }

}
