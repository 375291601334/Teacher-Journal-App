import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../common/services/data.service';


@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.less']
})
export class SubjectPageComponent implements OnInit {
  subjects;

  constructor(private dataService: DataService) { 
    this.subjects = this.dataService.getSubjects();
  }
  
  ngOnInit() {
  }

}
