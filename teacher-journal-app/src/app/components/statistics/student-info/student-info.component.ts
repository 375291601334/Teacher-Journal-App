import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../common/services/data.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.less']
})
export class StudentInfoComponent implements OnInit {
  studentFullName;
  student;
  subjects;

  constructor(private dataService: DataService,
    public route: ActivatedRoute) {

    this.subjects = this.dataService.getSubjects();

    this.route.params.subscribe(params => {
      this.studentFullName = params['id'];

      [ this.student ] = this.dataService.getStudents().filter(
        (student) => {
          return (student.name.last === this.studentFullName.slice(0,this.studentFullName.indexOf('_')) 
          && student.name.first === this.studentFullName.slice(this.studentFullName.indexOf('_') + 1, this.studentFullName.length ));
        }
      );
      
      this.subjects.forEach( (subject, index) => {
        let count = 0;
        let sum = 0;
        for (let key in subject.marks) {
          if (typeof subject.marks[key][this.student.id] === 'number') {
            sum = sum + subject.marks[key][this.student.id];
            count += 1;
          }
        }
        if (count>0) {
          this.student[subject.name] = sum/count;
        } else {
          this.student[subject.name] = 0;
        } 
      });

    });

  }

  ngOnInit() {
  }

}
