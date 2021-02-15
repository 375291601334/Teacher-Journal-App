import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService } from "../../../common/services/data.service";
import { Subject, Marks } from "src/app/common/classes/subject";

@Component({
  selector: "app-subject-form",
  templateUrl: "./subject-form.component.html",
  styleUrls: ["./subject-form.component.less"]
})
export class SubjectFormComponent implements OnInit {
  public subjectForm: FormGroup;

  constructor(private dataService: DataService,
              private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.subjectForm = this.fb.group({
      name: ["", Validators.required],
      teacher: ["", Validators.required],
      cabiner: ["",  Validators.pattern("^[0-9]*$")],
      description: ""
    });
  }

  public onSubmit(): void {
    let newSubject: Subject = new Subject(
      this.subjectForm.value.name,
      this.subjectForm.value.teacher,
      this.subjectForm.value.cabiner,
      this.subjectForm.value.description,
      [
        new Marks("04/02", []),
        new Marks("05/02", []),
        new Marks("06/02", []),
        new Marks("07/02", []),
      ]
    );

    this.dataService.addSubject(newSubject);
    this.subjectForm.reset();
  }

}
