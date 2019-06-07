import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../common/services/data.service';

@Component({
  selector: 'app-subject-info',
  templateUrl: './subject-info.component.html',
  styleUrls: ['./subject-info.component.less']
})
export class SubjectInfoComponent implements OnInit {
  subjectName;
  subject;
  averageBall;

  constructor(private dataService: DataService,
    public route: ActivatedRoute) { 
    
    this.route.params.subscribe(params => {
      this.subjectName = params['id'];

      [ this.subject ] = this.dataService.getSubjects().filter( (subject) => (subject.name === this.subjectName) );

      let count = 0, sum = 0;
      for (let key in this.subject.marks) {
        sum = sum + this.subject.marks[key].reduce( (sum, mark) => {
          if (typeof mark === 'number') {
            sum = sum + mark;
            count += 1;
          }
          return sum;
        }, 0
        );
      }
      if (count>0) {
        this.averageBall = sum/count;
      } else {
        this.averageBall = 0;
      }
    });
  }

  ngOnInit() {
  }

}
