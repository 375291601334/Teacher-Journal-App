import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { DataService } from "../../../common/services/data.service";
import { Student } from "../../../common/classes/student";

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.less"]
})
export class StudentFormComponent implements OnInit {
  public studentForm: FormGroup;

  constructor(public dataService: DataService,
              private fb: FormBuilder) {
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
      this.dataService.getStudents().length,
      {
        first: this.studentForm.value.firstName,
        last: this.studentForm.value.lastName
      },
      this.studentForm.value.address,
      this.studentForm.value.description
    );

    this.dataService.addStudent(newStudent);
    this.studentForm.reset();
  }

}
