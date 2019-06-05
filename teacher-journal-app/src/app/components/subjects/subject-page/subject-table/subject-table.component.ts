import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../../common/services/data.service';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.less']
})
export class SubjectTableComponent implements OnInit {
  students;
  subjects;

  constructor(private dataService: DataService) { 
    this.subjects = this.dataService.getSubjects();
    this.students = this.dataService.getStudents();
  }

  ngOnInit() {
  }

}
