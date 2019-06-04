import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentPageComponent } from './components/students/student-page/student-page.component';
import { StudentFormComponent } from './components/students/student-form/student-form.component';
import { SubjectPageComponent } from './components/subjects/subject-page/subject-page.component';
import { SubjectFormComponent } from './components/subjects/subject-form/subject-form.component';
import { SubjectTableComponent } from './components/subjects/subject-page/subject-table/subject-table.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExportComponent } from './components/export/export.component';

const routes: Routes = [
  { path: 'students', component: StudentPageComponent },
  { path: 'students/new', component: StudentFormComponent },
  { path: 'subjects', component: SubjectPageComponent },
  { path: 'subjects/new', component: SubjectFormComponent },
  { path: 'subjects/:id', component: SubjectTableComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'export', component: ExportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}




