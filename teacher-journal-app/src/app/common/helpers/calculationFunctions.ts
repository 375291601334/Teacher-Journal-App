import { Subject, Marks } from "src/app/common/classes/subject";

export function getStudentAverageBall(studentId: number, subject: Subject): number {
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
