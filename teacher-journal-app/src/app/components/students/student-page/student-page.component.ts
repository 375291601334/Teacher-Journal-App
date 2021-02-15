import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.less']
})
export class StudentPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  students = [
    {
      "id": 0,
      "name": {
        "first": "Gibson",
        "last": "Burt"
      },
      "address": "147 Norwood Avenue, Tryon, Alaska, 432",
      "description": "Esse id nostrud veniam minim ipsum aliqua occaecat officia deserunt magna dolore proident. Ipsum excepteur ad eiusmod aliquip qui anim dolore voluptate est. Pariatur consequat ipsum est eiusmod occaecat cupidatat et officia duis sint enim.",
      "subjects": [
        {
          "name": "Math",
          "04/02": 6,
          "05/02": 3,
          "06/02": 1,
          "07/02": 6
        },
        {
          "name": "English",
          "04/02": 3,
          "05/02": 10,
          "06/02": 4,
          "07/02": 6
        },
        {
          "name": "Biology",
          "04/02": 2,
          "05/02": 1,
          "06/02": 2,
          "07/02": 10
        },
        {
          "name": "Chemistry",
          "04/02": 9,
          "05/02": 8,
          "06/02": 2,
          "07/02": 10
        }
      ]
    },
    {
      "id": 1,
      "name": {
        "first": "Mccray",
        "last": "Kaufman"
      },
      "address": "408 Cornelia Street, Rehrersburg, Marshall Islands, 3480",
      "description": "Esse minim ullamco in fugiat ipsum et ullamco minim nulla laborum cillum nostrud fugiat id. Irure magna est id aliqua dolor exercitation fugiat cillum anim velit elit officia. Consectetur labore reprehenderit fugiat consequat est exercitation ad irure ad. Do elit ea ex consectetur et quis sint voluptate mollit enim deserunt. Tempor cillum pariatur reprehenderit voluptate nulla enim excepteur pariatur commodo est reprehenderit. Ullamco elit commodo Lorem adipisicing ipsum aute esse consequat esse qui deserunt.",
      "subjects": [
        {
          "name": "Math",
          "04/02": 7,
          "05/02": 6,
          "06/02": 6,
          "07/02": 0
        },
        {
          "name": "English",
          "04/02": 1,
          "05/02": 9,
          "06/02": 3,
          "07/02": 0
        },
        {
          "name": "Biology",
          "04/02": 6,
          "05/02": 0,
          "06/02": 6,
          "07/02": 8
        },
        {
          "name": "Chemistry",
          "04/02": 1,
          "05/02": 2,
          "06/02": 9,
          "07/02": 1
        }
      ]
    },
    {
      "id": 2,
      "name": {
        "first": "Jolene",
        "last": "Gentry"
      },
      "address": "442 Beacon Court, Echo, Ohio, 842",
      "description": "Aliquip Lorem adipisicing eiusmod exercitation. Officia incididunt sint incididunt amet voluptate dolor excepteur fugiat incididunt cupidatat exercitation voluptate non. Esse id aliqua incididunt ipsum cillum laborum in labore ullamco excepteur sint commodo eiusmod excepteur. Consectetur pariatur nostrud cillum consequat elit irure nostrud id est.",
      "subjects": [
        {
          "name": "Math",
          "04/02": 3,
          "05/02": 10,
          "06/02": 7,
          "07/02": 7
        },
        {
          "name": "English",
          "04/02": 0,
          "05/02": 5,
          "06/02": 5,
          "07/02": 8
        },
        {
          "name": "Biology",
          "04/02": 7,
          "05/02": 1,
          "06/02": 9,
          "07/02": 9
        },
        {
          "name": "Chemistry",
          "04/02": 2,
          "05/02": 5,
          "06/02": 4,
          "07/02": 10
        }
      ]
    },
    {
      "id": 3,
      "name": {
        "first": "Brown",
        "last": "Chan"
      },
      "address": "348 College Place, Brule, Maryland, 284",
      "description": "Minim proident anim commodo pariatur duis dolore veniam. Non minim minim elit consectetur. Nisi id reprehenderit adipisicing cillum proident irure ullamco cupidatat ullamco nisi nostrud.",
      "subjects": [
        {
          "name": "Math",
          "04/02": 0,
          "05/02": 5,
          "06/02": 9,
          "07/02": 8
        },
        {
          "name": "English",
          "04/02": 0,
          "05/02": 8,
          "06/02": 9,
          "07/02": 6
        },
        {
          "name": "Biology",
          "04/02": 1,
          "05/02": 9,
          "06/02": 9,
          "07/02": 4
        },
        {
          "name": "Chemistry",
          "04/02": 9,
          "05/02": 3,
          "06/02": 5,
          "07/02": 1
        }
      ]
    },
    {
      "id": 4,
      "name": {
        "first": "Angelina",
        "last": "Delaney"
      },
      "address": "457 Bennet Court, Siglerville, Missouri, 3838",
      "description": "Quis nisi cupidatat veniam adipisicing proident aliquip amet eiusmod incididunt ea ea laborum minim dolore. Proident reprehenderit proident ad laboris magna duis laboris sit cillum do dolor fugiat commodo aute. Consequat cupidatat adipisicing reprehenderit et mollit sunt.",
      "subjects": [
        {
          "name": "Math",
          "04/02": 9,
          "05/02": 5,
          "06/02": 3,
          "07/02": 2
        },
        {
          "name": "English",
          "04/02": 6,
          "05/02": 6,
          "06/02": 6,
          "07/02": 7
        },
        {
          "name": "Biology",
          "04/02": 4,
          "05/02": 1,
          "06/02": 10,
          "07/02": 6
        },
        {
          "name": "Chemistry",
          "04/02": 3,
          "05/02": 10,
          "06/02": 5,
          "07/02": 0
        }
      ]
    },
    {
      "id": 5,
      "name": {
        "first": "Barbra",
        "last": "Farmer"
      },
      "address": "925 Elm Place, Belmont, Puerto Rico, 8768",
      "description": "Eu occaecat quis esse eiusmod aliqua minim adipisicing ullamco dolor elit. Enim consectetur aliqua id aute tempor occaecat officia laborum ad esse adipisicing mollit. Occaecat quis et enim nisi veniam nulla magna quis tempor ad est fugiat. Aliqua est sint sit aute tempor tempor.",
      "subjects": [
        {
          "name": "Math",
          "04/02": 5,
          "05/02": 3,
          "06/02": 0,
          "07/02": 7
        },
        {
          "name": "English",
          "04/02": 1,
          "05/02": 4,
          "06/02": 7,
          "07/02": 3
        },
        {
          "name": "Biology",
          "04/02": 8,
          "05/02": 9,
          "06/02": 8,
          "07/02": 1
        },
        {
          "name": "Chemistry",
          "04/02": 2,
          "05/02": 10,
          "06/02": 5,
          "07/02": 10
        }
      ]
    }
  ]

}
