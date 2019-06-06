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
  subjects;
  subjectName;
  subjectId;

  constructor(private dataService: DataService,
    public route: ActivatedRoute) { 
    
    this.route.params.subscribe(params => {
      this.subjectName = params['id'];
    });

    this.subjects = this.dataService.getSubjects();
    this.students = this.dataService.getStudents();

    this.subjects.forEach( (subject, index) => {
      if (subject.name === this.subjectName) {
        this.subjectId = index;
      }
    }
    );


    this.students.forEach( (student, id) =>
      {
        let sum = 0, count = 0;
        
        for (let key in student.subjects[this.subjectName]) {
          sum = sum + student.subjects[this.subjectName][key];
          count += 1;
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
