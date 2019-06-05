import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../common/services/data.service';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.less']
})
export class SubjectsListComponent implements OnInit {
  subjects;
  
  constructor(private dataService: DataService) { 
    this.subjects = this.dataService.getSubjects();
  }


  ngOnInit() {
  }

}
