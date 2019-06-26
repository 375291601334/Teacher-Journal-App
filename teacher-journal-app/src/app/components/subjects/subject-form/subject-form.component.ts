import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subject, Marks } from "src/app/common/classes/subject";

import { Store } from "@ngrx/store";
import { State } from "../../../redux/reducers/combineReducers";
import * as fromSubjects from "../../../redux/actions/subjects.actions";
import { Router } from "@angular/router";
import { selectStudents } from "../../../redux/selectors/students.selectors";

@Component({
  selector: "app-subject-form",
  templateUrl: "./subject-form.component.html",
  styleUrls: ["./subject-form.component.less"]
})
export class SubjectFormComponent implements OnInit {
  public subjectForm: FormGroup;
  public studentsNumber: number;

  constructor(private store: Store<State>,
              private fb: FormBuilder,
              private router: Router) {
    store.select(selectStudents).subscribe( students => this.studentsNumber = students.length);
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
    let nullMarks: null[] = [];
    for (let i: number; i < this.studentsNumber; i++) {
      nullMarks.push(null);
    }
    let newSubject: Subject = new Subject(
      this.subjectForm.value.name,
      this.subjectForm.value.teacher,
      this.subjectForm.value.cabiner,
      this.subjectForm.value.description,
      [
        new Marks("2019-06-01", nullMarks),
        new Marks("2019-06-02", nullMarks),
        new Marks("2019-06-03", nullMarks),
        new Marks("2019-06-04", nullMarks),
      ]
    );

    this.store.dispatch(new fromSubjects.AddSubject(newSubject));
    this.subjectForm.reset();
    this.router.navigate(["/subjects"]);
  }

}
