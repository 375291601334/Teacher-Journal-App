import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.less']
})
export class SubjectPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  subjects =   [
    {
      "name": "Math",
      "teacher": "Ms.Joyner",
      "cabiner": 727,
      "description": "Et anim et amet excepteur dolore. Veniam irure Lorem dolore exercitation esse aliquip nostrud elit eiusmod dolore amet eiusmod magna culpa. Cillum duis commodo ullamco labore aliquip exercitation ad elit."
    },
    {
      "name": "English",
      "teacher": "Ms.Hunt",
      "cabiner": 344,
      "description": "Dolor nisi exercitation reprehenderit exercitation. Consequat pariatur aliquip occaecat dolore proident dolore ipsum anim nostrud non amet est. Commodo exercitation cillum velit nostrud culpa ipsum proident ad laborum ad exercitation cillum. Cillum minim ut dolor ullamco officia duis tempor labore aliqua occaecat tempor esse non non. Ad anim aliquip sunt sunt aute culpa in non dolor consequat cillum in."
    },
    {
      "name": "Biology",
      "teacher": "Ms.Pollard",
      "cabiner": 813,
      "description": "Aliqua fugiat do irure commodo. Deserunt ea tempor ullamco et exercitation. Qui amet aute fugiat exercitation in ea."
    },
    {
      "name": "Chemistry",
      "teacher": "Ms.Hooper",
      "cabiner": 334,
      "description": "Aute aute et pariatur culpa officia adipisicing voluptate quis qui enim. In ad laboris ea veniam pariatur sint ea fugiat culpa mollit. Cillum fugiat amet cupidatat non. Magna fugiat do consectetur deserunt non et deserunt ipsum pariatur culpa ullamco eiusmod."
    }
  ]

}
