import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Student } from "../../../common/classes/student";

import { Store, select } from "@ngrx/store";
import { StudentsState } from "../../../redux/students.state";
import * as DataActions from "../../../redux/students.actions";

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.less"]
})

export class StudentFormComponent implements OnInit {
  public studentForm: FormGroup;
  public students: Student[];
  public nextStudentId: number;

  constructor(private fb: FormBuilder, private store: Store<StudentsState>) {
    store.pipe(select("students")).subscribe( (sudents) => this.nextStudentId = sudents.length);
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
    this.store.dispatch(new DataActions.addStudent(newStudent));
    this.studentForm.reset();
  }

}
