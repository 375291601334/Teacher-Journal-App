import { Injectable } from "@angular/core";
import { Subject, Marks } from "../../classes/subject";

@Injectable({
  providedIn: "root"
})
export class AverageMarksCalculationsService {

  private addNewMark(sum: number, count: number, newMark: number|null): [number, number] {
    if (typeof newMark === "number") {
         sum = sum + newMark;
         count += 1;
       }
    return [ sum, count ];
  }

  public getStudentAverageBall(studentId: number, subject: Subject): number {
    let sum: number = 0;
    let count: number = 0;

    subject.marks.forEach((marksObj: Marks) => {
      [ sum, count ] = this.addNewMark(sum, count, marksObj.studentsMarks[studentId]);
    });
    return count > 0 ? sum / count : 0;
  }

  public getSubjectAverageBall(subject: Subject): number {
    let count: number = 0;
    let sum: number = 0;

    subject.marks.forEach((marksObj: Marks) => {
      marksObj.studentsMarks.forEach((mark) => {
        [ sum, count ] = this.addNewMark(sum, count, mark);
      });
    });
    return count > 0 ? sum / count : 0;
  }

}
