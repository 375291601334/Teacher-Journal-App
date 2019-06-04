import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExportComponent } from './components/export/export.component';
import { StudentFormComponent } from './components/students/student-form/student-form.component';
import { StudentsTableComponent } from './components/students/student-page/students-table/students-table.component';
import { SubjectFormComponent } from './components/subjects/subject-form/subject-form.component';
import { SubjectPageComponent } from './components/subjects/subject-page/subject-page.component';
import { SubjectTableComponent } from './components/subjects/subject-page/subject-table/subject-table.component';
import { StudentPageComponent } from './components/students/student-page/student-page.component';

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
    StudentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
