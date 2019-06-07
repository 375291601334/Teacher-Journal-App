import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DataService } from '../../../common/services/data.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.less']
})
export class SubjectFormComponent implements OnInit {
  subjectForm: FormGroup;

  constructor(private dataService: DataService,
    private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.subjectForm = this.fb.group({
      name: '',
      teacher: '',
      cabiner: '',
      description: ''
    });
  }

  onSubmit() {
    let newSubject = {
      name:  this.subjectForm.value.name,
      teacher:  this.subjectForm.value.teacher,
      cabiner: this.subjectForm.value.cabiner,
      description: this.subjectForm.value.description,
      marks: {
        '04/02': [],
        '05/02': [],
        '06/02': [],
        '07/02': []
      }
    };

    this.dataService.addSubject(newSubject);
  }

}
