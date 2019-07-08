import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Store } from "@ngrx/store";
import { State } from "../redux/reducers/combineReducers";
import { LoadSubjects } from "src/app/redux/actions/subjects.actions";
import { LoadStudents } from "src/app/redux/actions/students.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  public languages: {value: string, viewValue: string}[] = [
    {value: "en", viewValue: "En"},
    {value: "ru", viewValue: "Ru"}
  ];

  constructor(private store: Store<State>, private translate: TranslateService) {
    translate.setDefaultLang("en");
    store.dispatch(new LoadSubjects());
    store.dispatch(new LoadStudents());
  }
}
