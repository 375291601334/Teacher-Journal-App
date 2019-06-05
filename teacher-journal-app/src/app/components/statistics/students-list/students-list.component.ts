import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../common/services/data.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.less']
})
export class StudentsListComponent implements OnInit {
  students;
  
  constructor(private dataService: DataService) { 
    this.students = this.dataService.getStudents();
  }

  ngOnInit() {
  }

}
