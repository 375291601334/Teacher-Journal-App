import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.less']
})
export class StudentsTableComponent implements OnInit {
  @Input() students;
  constructor() { }

  ngOnInit() {
  }

}
