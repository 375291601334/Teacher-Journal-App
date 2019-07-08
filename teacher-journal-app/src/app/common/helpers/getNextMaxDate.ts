import { Marks } from "../classes/subject";

export default function getNextMaxDate(marks: Marks[]): string {
  let maxDate: Date;
  let nextMaxDate: Date;
  maxDate = getMaxDate(marks);
  nextMaxDate = maxDate;
  nextMaxDate.setDate( maxDate.getDate() + 1 );
  return new Date(nextMaxDate).toJSON().slice(0, 10);
}

function getMaxDate(marks: Marks[]): Date {
  return marks.reduce(
  (maxdate: Date, marksObj: Marks) => {
    if ( new Date(marksObj.date) > maxdate ) {
      maxdate = new Date(marksObj.date);
    }
    return maxdate;
  },
  new Date("01.01.2019"));
}
