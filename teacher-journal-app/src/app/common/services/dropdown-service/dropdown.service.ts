import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../../../redux/reducers/combineReducers";
import { selectStudents } from "../../../redux/selectors/students.selectors";
import { selectSubjects } from "../../../redux/selectors/subjects.selectors";
import { Student } from "../../../common/classes/student";
import { Subject } from "../../../common/classes/subject";
import { INITIAL_DROPDOWN_TITLE } from "../../../shared/constants/constants";

export interface DataForDropdown {
  [key: string]: {
    dates: string[],
    students: {
      [key: number]: {
        name: string,
        marks: number[]
      }
    }
  };
}

@Injectable({
  providedIn: "root"
})

export class DropdownService {
  public students: Student[];
  public subjects: Subject[];
  public selectedDataForDropdown: DataForDropdown = {};
  public selectedSubjects: string[];
  public dropdownTitle: string = INITIAL_DROPDOWN_TITLE;

  constructor(private store: Store<State>) {
    this.store.select(selectStudents)
        .subscribe( students => this.students = students);

    this.store.select(selectSubjects)
        .subscribe( (subjects) => this.subjects = subjects );
  }

  public getFullDataForDropdown(selectedDataForDropdown: DataForDropdown): DataForDropdown {
    this.subjects.forEach( subject => {
      selectedDataForDropdown[subject.name] = {dates: [], students: {} };
      subject.marks.forEach( marksObj => {
        selectedDataForDropdown[subject.name].dates.push(marksObj.date);
        marksObj.studentsMarks.forEach( (mark, index) => {
          let hasStudentInSelectedData: boolean = selectedDataForDropdown[subject.name].students[index] !== undefined;
          if ( mark !== null || hasStudentInSelectedData) {
            if ( !hasStudentInSelectedData ) {
              let nullMarks: number[] = [];
              let len: number = selectedDataForDropdown[subject.name].dates.length - 1;
              for (let i: number = 0; i < len; i++) {
                nullMarks.push(null);
              }
              selectedDataForDropdown[subject.name].students[index] = {
                name: `${this.students[index].name.first} ${this.students[index].name.last}`,
                marks: [...nullMarks, mark]
              };
            } else {
              selectedDataForDropdown[subject.name].students[index].marks.push(mark);
            }
          }
        });
      });
    });
    return selectedDataForDropdown;
  }

  public removeFromSelectedData(subjectName: string, indexOfData: number, selectedDataForDropdown: DataForDropdown): DataForDropdown {
    // remove date from dates
    selectedDataForDropdown[subjectName].dates.splice(indexOfData, 1);
    // remove marks from that date and students if they has no marks in this dates
    for (let id of Object.keys(selectedDataForDropdown[subjectName].students)) {
      selectedDataForDropdown[subjectName].students[id].marks.splice(indexOfData, 1);
      if (selectedDataForDropdown[subjectName].students[id].marks.every( mark => mark === null )) {
        delete selectedDataForDropdown[subjectName].students[id];
      }
    }
    // remove subject if there are not selected dates
    if (selectedDataForDropdown[subjectName].dates.length === 0) {
      delete selectedDataForDropdown[subjectName];
      document.getElementsByName(subjectName)[0].removeAttribute("checked");
    }
    return selectedDataForDropdown;
  }

  public addToSelectedData(date: string, subjectName: string, selectedDataForDropdown: DataForDropdown): DataForDropdown {
    if (!selectedDataForDropdown[subjectName]) {
      selectedDataForDropdown = {...selectedDataForDropdown, [subjectName]: { dates: [], students: {} } };
      document.getElementsByName(subjectName)[0].setAttribute("checked", "checked");
    }
    selectedDataForDropdown[subjectName].dates.push(date);
    this.subjects.forEach( subject => {
      if (subject.name === subjectName) {
        subject.marks.forEach( marksObj => {
          if (marksObj.date === date) {
            marksObj.studentsMarks.forEach( (mark, index) => {
              let hasStudentInSelectedData: boolean = selectedDataForDropdown[subjectName].students[index] !== undefined;
              if ( mark !== null || hasStudentInSelectedData) {
                if ( !hasStudentInSelectedData ) {
                  let nullMarks: number[] = [];
                  let len: number = selectedDataForDropdown[subject.name].dates.length - 1;
                  for (let i: number = 0; i < len; i++) {
                    nullMarks.push(null);
                  }
                  selectedDataForDropdown[subjectName].students[index] = {
                    name: `${this.students[index].name.first} ${this.students[index].name.last}`,
                    marks: [...nullMarks, mark]
                  };
                } else {
                  selectedDataForDropdown[subjectName].students[index].marks.push(mark);
                }
              }
            });
          }
        });
      }
    });
    return selectedDataForDropdown;
  }

}
