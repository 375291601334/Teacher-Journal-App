import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentPageComponent } from "./components/students/student-page/student-page.component";
import { StudentFormComponent } from "./components/students/student-form/student-form.component";
import { SubjectPageComponent } from "./components/subjects/subject-page/subject-page.component";
import { SubjectFormComponent } from "./components/subjects/subject-form/subject-form.component";
import { SubjectTableComponent } from "./components/subjects/subject-page/subject-table/subject-table.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { SubjectsListComponent } from "./components/statistics/subjects-list/subjects-list.component";
import { StudentsListComponent } from "./components/statistics/students-list/students-list.component";
import { SubjectInfoComponent } from "./components/statistics/subject-info/subject-info.component";
import { StudentInfoComponent } from "./components/statistics/student-info/student-info.component";
import { ExportComponent } from "./components/export/export.component";
import { CanDeactivateGuard } from "./common/guards/can-deactivate-unsaved-marks/can-deactivate.guard";
import { SubjectExistGuard } from "./common/guards/subject-exist/subject-exist.guard";
import { StudentExistGuard } from "./common/guards/student-exist/student-exist.guard";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "students", component: StudentPageComponent  },
  { path: "students/new", component: StudentFormComponent },
  { path: "subjects", component: SubjectPageComponent },
  { path: "subjects/new", component: SubjectFormComponent },
  {
    path: "subjects/:id",
    component: SubjectTableComponent,
    canDeactivate: [CanDeactivateGuard],
    canActivate: [SubjectExistGuard]
  },
  { path: "statistics", component: StatisticsComponent,
    children: [
      { path: "", redirectTo: "students", pathMatch: "full"},
      { path: "students", component: StudentsListComponent,
      children: [
          { path: "", redirectTo: "Chaney_Fields", pathMatch: "full" },
          { path: ":id", component: StudentInfoComponent, canActivate: [StudentExistGuard] }
        ]
      },
      { path: "subjects", component: SubjectsListComponent,
      children: [
        { path: "", redirectTo: "Math", pathMatch: "full" },
        { path: ":id", component: SubjectInfoComponent, canActivate: [SubjectExistGuard]}
      ]
      }
    ]
  },
  { path: "statistics", component: ExportComponent },
  { path: "export", component: ExportComponent },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "",
    redirectTo: "/students",
    pathMatch: "full"
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
