import { Component, Renderer2, ElementRef } from "@angular/core";
import { INITIAL_DROPDOWN_TITLE } from "../../shared/constants/constants";
import { DropdownService, DataForDropdown } from "../../common/services/dropdown-service/dropdown.service";
import { Subject } from "src/app/common/classes/subject";
import { Store } from "@ngrx/store";
import { State } from "src/app/redux/reducers/combineReducers";
import { selectSubjects } from "src/app/redux/selectors/subjects.selectors";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.less"]
})

export class DropdownComponent {
  public subjects: Subject[];
  public dataForDropdown: DataForDropdown = {};
  public selectedSubjects: string[];
  public dropdownTitle: string = INITIAL_DROPDOWN_TITLE;

  constructor(private dropdownService: DropdownService, private renderer: Renderer2, private el: ElementRef, private store: Store<State>) {
    this.store.select(selectSubjects)
        .subscribe( (subjects) => this.subjects = subjects );
  }

  public onDropdownClick(event: any): void {
    if (this.renderer.parentNode(event.target).classList.contains("visible")) {
      this.renderer.removeClass(this.renderer.parentNode(event.target), "visible");
      this.uncheckAllClick();
      this.expand();
    } else {
      this.renderer.addClass(this.renderer.parentNode(event.target), "visible");
    }
  }

  public onSbujectDropdownClick(event: any): void {
    if (this.renderer.parentNode(event.target).classList.contains("visible")) {
      this.renderer.removeClass(this.renderer.parentNode(event.target), "visible");
    } else {
      this.renderer.addClass(this.renderer.parentNode(event.target), "visible");
    }
  }

  public checkAllClick(): void {
    Array.from(document.getElementsByTagName("input")).forEach( element => {
      element.setAttribute("checked", "checked");
      element.checked = true;
    });
    this.dataForDropdown = this.dropdownService.getFullDataForDropdown(this.dataForDropdown);
    this.selectedSubjects = Object.keys(this.dataForDropdown);
    this.dropdownTitle = this.getDropdownTitle(this.dataForDropdown);
  }

  public uncheckAllClick(): void {
    Array.from(document.getElementsByTagName("input")).forEach( element => {
      element.removeAttribute("checked");
      element.checked = false;
    });
    this.dataForDropdown = {};
    this.selectedSubjects = Object.keys(this.dataForDropdown);
    this.dropdownTitle = this.getDropdownTitle(this.dataForDropdown);
  }

  public close(): void {
    this.renderer.removeClass(document.getElementsByClassName("dropdown-list")[0], "visible");
    this.uncheckAllClick();
    this.expand();
  }

  public expand(): void {
    Array.from(document.getElementsByClassName("subject-dates-list")).forEach(element => {
      this.renderer.removeClass(element, "visible");
    });
  }

  public collapse(): void {
    Array.from(document.getElementsByClassName("subject-dates-list")).forEach(element => {
      this.renderer.addClass(element, "visible");
    });
  }

  public toggleCheckData(event: any, subjectName: string): void {
    let date: string = event.target.value;
    // if uncheck date
    if (!event.target.checked) {
      let indexOfUncheckedData: number = this.dataForDropdown[subjectName].dates.indexOf(date);
      event.target.removeAttribute("checked");
      this.dataForDropdown = this.dropdownService.removeFromSelectedData(subjectName, indexOfUncheckedData, this.dataForDropdown);
      this.selectedSubjects = Object.keys(this.dataForDropdown);
      this.dropdownTitle = this.getDropdownTitle(this.dataForDropdown);
      return;
    }
    // if check date
    event.target.setAttribute("checked", "checked");
    this.dataForDropdown = this.dropdownService.addToSelectedData(date, subjectName, this.dataForDropdown);
    this.selectedSubjects = Object.keys(this.dataForDropdown);
    this.dropdownTitle = this.getDropdownTitle(this.dataForDropdown);
  }

  public getStudentsId(subjectName: string): string[] {
    return Object.keys(this.dataForDropdown[subjectName].students);
  }

  public getDropdownTitle(data: DataForDropdown): string {
    let text: string = "";
    for (let subjectName of Object.keys(data)) {
      text = `${text} ${subjectName}:`;
      data[subjectName].dates.forEach( date => {
        text = `${text} ${date};`;
      });
    }
    if ( text === "" ) {
      text = INITIAL_DROPDOWN_TITLE;
    }
    return text;
  }
}
