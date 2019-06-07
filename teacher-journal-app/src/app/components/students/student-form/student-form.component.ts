import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DataService } from '../../../common/services/data.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.less']
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private dataService: DataService,
    private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.studentForm = this.fb.group({
      firstName: '',
      lastName: '',
      address: '',
      description: ''
    });
  }

  onSubmit() {
    let newStudent = {
      id: this.dataService.getStudents().length, 
      name: {
        first: this.studentForm.value.firstName,
        last: this.studentForm.value.lastName
      },
      address: this.studentForm.value.address,
      description: this.studentForm.value.description,
    };

    this.dataService.addStudent(newStudent);
  }

}
