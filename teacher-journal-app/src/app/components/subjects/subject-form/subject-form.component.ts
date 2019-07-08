import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subject, Marks } from "../../../common/classes/subject";
import { Store } from "@ngrx/store";
import { State } from "../../../redux/reducers/combineReducers";
import * as fromSubjects from "../../../redux/actions/subjects.actions";
import { Router } from "@angular/router";
import { selectStudents } from "../../../redux/selectors/students.selectors";
import { DataService } from "../../../common/services/data-service/data.service";
import { selectSubjects } from 'src/app/redux/selectors/subjects.selectors';

@Component({
  selector: "app-subject-form",
  templateUrl: "./subject-form.component.html",
  styleUrls: ["./subject-form.component.less"]
})
export class SubjectFormComponent implements OnInit {
  public subjectForm: FormGroup;
  public studentsNumber: number;
  public nextSubjectId: number;

  constructor(private store: Store<State>,
              private dataService: DataService,
              private fb: FormBuilder,
              private router: Router) {
    store.select(selectStudents).subscribe( students => this.studentsNumber = students.length);
    store.select(selectSubjects).subscribe( subjects => this.nextSubjectId = subjects.length);
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
      this.nextSubjectId,
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

    console.log(newSubject);
    this.dataService.addNewSubject(newSubject)
                    .subscribe(status => {
                      if (status.ok === 1) {
                        this.store.dispatch(new fromSubjects.AddSubject(newSubject));
                      }
                     });
    this.subjectForm.reset();
    this.router.navigate(["/subjects"]);
  }

}
