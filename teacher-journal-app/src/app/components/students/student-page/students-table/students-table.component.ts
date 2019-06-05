import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../../common/services/data.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.less']
})
export class StudentsTableComponent implements OnInit {
  students;
  
  constructor(private dataService: DataService) { 
    this.students = this.dataService.getStudents();
  }

  ngOnInit() {
  }

}
