import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Student } from "../../../common/classes/student";

import { Store, select } from "@ngrx/store";
import { StudentsState } from "../../../redux/students.state";
import * as fromStudents from "../../../redux/actions/students.actions";

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.less"]
})

export class StudentFormComponent implements OnInit {
  public studentForm: FormGroup;
  public nextStudentId: number;

  constructor(private fb: FormBuilder, private store: Store<StudentsState>) {
    store.select("students")
         .subscribe( students => this.nextStudentId = students.length);
  }

  public ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      address: "",
      description: ""
    });
  }

  public onSubmit(): void {
    let newStudent: Student = new Student(
      this.nextStudentId,
      {
        first: this.studentForm.value.firstName,
        last: this.studentForm.value.lastName
      },
      this.studentForm.value.address,
      this.studentForm.value.description
    );
    this.store.dispatch(new fromStudents.AddStudent(newStudent));
    this.studentForm.reset();
  }

}
