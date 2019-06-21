import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import {MatButtonModule} from "@angular/material";
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./root/app.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { ExportComponent } from "./components/export/export.component";
import { StudentFormComponent } from "./components/students/student-form/student-form.component";
import { StudentsTableComponent } from "./components/students/student-page/students-table/students-table.component";
import { SubjectFormComponent } from "./components/subjects/subject-form/subject-form.component";
import { SubjectPageComponent } from "./components/subjects/subject-page/subject-page.component";
import { SubjectTableComponent } from "./components/subjects/subject-page/subject-table/subject-table.component";
import { StudentPageComponent } from "./components/students/student-page/student-page.component";
import { ButtonComponent } from "./shared/components/button/button.component";
import { StudentsListComponent } from "./components/statistics/students-list/students-list.component";
import { SubjectsListComponent } from "./components/statistics/subjects-list/subjects-list.component";
import { SubjectInfoComponent } from "./components/statistics/subject-info/subject-info.component";
import { StudentInfoComponent } from "./components/statistics/student-info/student-info.component";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { effects } from "./redux/effects/combineEffects";
import { reducers } from "./redux/reducers/combineReducers";

import { HttpClientModule } from "@angular/common/http";
import { SortPipe } from "./common/pipes/sort.pipe";
import { ValidateMarkDirective } from "./common/directives/validate-mark.directive";
import { ValidateDateDirective } from "./common/directives/validate-date.directive";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    ExportComponent,
    StudentFormComponent,
    StudentsTableComponent,
    SubjectFormComponent,
    SubjectPageComponent,
    SubjectTableComponent,
    StudentPageComponent,
    ButtonComponent,
    StudentsListComponent,
    SubjectsListComponent,
    SubjectInfoComponent,
    StudentInfoComponent,
    SortPipe,
    ValidateMarkDirective,
    ValidateDateDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    HttpClientModule
  ],
  providers: [ SortPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
