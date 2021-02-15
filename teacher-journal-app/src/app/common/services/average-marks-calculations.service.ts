import { Injectable } from "@angular/core";
import { Subject, Marks } from "../../common/classes/subject";

@Injectable({
  providedIn: "root"
})
export class AverageMarksCalculationsService {

  public getStudentAverageBall(studentId: number, subject: Subject): number {
    let sum: number = 0, count: number = 0;

    subject.marks.forEach( (marksObj: Marks) => {
      if (typeof marksObj.studentsMarks[studentId] === "number") {
        sum = sum + marksObj.studentsMarks[studentId];
        count += 1;
      }
    });

    if (count > 0) {
      return sum / count;
    } else {
      return 0;
    }
  }

  public getSubjectAverageBall(subject: Subject): number {
    let count: number = 0, sum: number = 0;

    subject.marks.forEach( (marksObj: Marks) => {
        marksObj.studentsMarks.forEach( (mark) => {
          if (typeof mark === "number") {
            sum = sum + mark;
            count += 1;
          }
        });
      });

    if (count > 0) {
        return (sum / count);
      } else {
        return 0;
      }
  }

}
