import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../../common/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.less']
})
export class SubjectTableComponent implements OnInit {
  students;
  subject;
  subjectName;

  constructor(private dataService: DataService,
    public route: ActivatedRoute) { 
    
    this.route.params.subscribe(params => {
      this.subjectName = params['id'];
    });

    [ this.subject ] = this.dataService.getSubjects().filter( (subject) => (subject.name === this.subjectName) );
    this.students = this.dataService.getStudents();

    this.students.forEach( (student, id) =>
      {
        let sum = 0, count = 0;
        
        for (let key in this.subject.marks) {
          if (typeof this.subject.marks[key][id] === 'number') {
            sum = sum + this.subject.marks[key][id];
            count += 1;
          }
        }
        if (count > 0) {
          this.students[id].averageMark =  sum/count;
        } else {
          this.students[id].averageMark = 0;
        }
      }
    )
    
  }

  ngOnInit() {
  }

}
