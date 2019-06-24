import { Component, Renderer2, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../../redux/reducers/combineReducers";
import { selectStudents } from "../../redux/selectors/students.selectors";
import { selectSubjects } from "../../redux/selectors/subjects.selectors";
import { Student } from "../../common/classes/student";
import { Subject } from "../../common/classes/subject";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.less"]
})
export class StatisticsComponent {
  public students: Student[];
  public subjects: Subject[];
  public isVisible: boolean = false;
  public selectedItems: {[subject: string]: { dates: string[], studentsId: number[] }} = {};
  public selectedSubjects: string[];

  constructor(private store: Store<State>, private renderer: Renderer2, private el: ElementRef) {
    this.store.select(selectStudents)
        .subscribe( students => this.students = students);

    this.store.select(selectSubjects)
        .subscribe( (subjects) => this.subjects = subjects );
  }

  public onClick(event: any): void {
    if (this.isVisible) {
      this.renderer.removeClass(this.renderer.parentNode(event.target), "visible");
    } else {
      this.renderer.addClass(this.renderer.parentNode(event.target), "visible");
    }
    this.isVisible = !this.isVisible;
  }

  public onSbujectClick(event: any): void {
    if (this.renderer.parentNode(event.target).classList.contains("visible")) {
      this.renderer.removeClass(this.renderer.parentNode(event.target), "visible");
    } else {
      this.renderer.addClass(this.renderer.parentNode(event.target), "visible");
    }
  }

  public checkAllClick($event) {

  }

  public uncheckAllClick($event) {

  }

  public check(event: any, subjectName: string): void {
    console.log(event.target.value, subjectName);
    if (!this.selectedItems[subjectName]) {
      this.selectedItems = {...this.selectedItems, [subjectName]: { dates: [], studentsId: [] }};
    }

    this.selectedItems[subjectName].dates.push(event.target.value);
    this.subjects.forEach( subject => {
      if (subject.name === subjectName) {
        subject.marks.forEach( marksObj => {
          if (marksObj.date === event.target.value) {
            marksObj.studentsMarks.forEach( (mark, index) => {
              if ( mark !== null ) {
                console.log(this.selectedItems[subjectName].studentsId.indexOf(index), index);
                if ( this.selectedItems[subjectName].studentsId.indexOf(index) === -1 ) {
                  this.selectedItems[subjectName].studentsId.push(index);
                }
              }
            });
          }
        });
      }
    });
    this.selectedSubjects = Object.keys(this.selectedItems);
    console.log(this.selectedItems);
  }

}
