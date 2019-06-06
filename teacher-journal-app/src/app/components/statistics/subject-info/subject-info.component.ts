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
  students;
  subject;
  averageBall;

  constructor(private dataService: DataService,
    public route: ActivatedRoute) { 
    
    this.route.params.subscribe(params => {
      this.subjectName = params['id'];
    });


    this.dataService.getSubjects().forEach( (subject) =>
    {
      if (subject.name === this.subjectName)
      this.subject = subject;
    }
    );
    this.students = this.dataService.getStudents();


    let count = 0;
    this.averageBall = this.students.reduce( (sum, student) =>
    {
      for (let key in student.subjects[this.subjectName]) {
        count += 1;
        sum = sum + student.subjects[this.subjectName][key];
      }
      console.log(sum);
      return sum;
    }, 0
  ) / count;


  }

  ngOnInit() {
  }

}
