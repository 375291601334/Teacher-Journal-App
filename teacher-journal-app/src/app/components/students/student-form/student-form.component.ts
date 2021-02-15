import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Student } from "../../../common/classes/student";

import { Store } from "@ngrx/store";
import { State } from "../../../redux/reducers/combineReducers";
import { selectStudents } from "../../../redux/selectors/students.selectors";
import * as fromStudents from "../../../redux/actions/students.actions";
import { Router } from "@angular/router";

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.less"]
})

export class StudentFormComponent implements OnInit {
  public studentForm: FormGroup;
  public nextStudentId: number;

  constructor(private fb: FormBuilder, private store: Store<State>, private router: Router) {
    store.select(selectStudents)
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
    this.router.navigate(["/students"]);
  }

}
