import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgForm } from "@angular/forms";
import { StudentPageComponent } from "./student-page.component";
import { MockTranslatePipe } from "../../../common/pipes/mock-translate.pipe";
import { SubjectTableComponent } from "../../subjects/subject-page/subject-table/subject-table.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("StudentPageComponent", () => {
  let component: StudentPageComponent;
  let fixture: ComponentFixture<StudentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPageComponent, MockTranslatePipe, SubjectTableComponent, ButtonComponent, NgForm ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(StudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
