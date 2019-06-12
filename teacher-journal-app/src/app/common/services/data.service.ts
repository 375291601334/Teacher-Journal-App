import { Injectable } from "@angular/core";
import { Student } from "../classes/student";
import { Subject } from "../classes/subject";

@Injectable({
  providedIn: "root"
})
export class DataService {

  public students: Student[] = [
      {
        "id": 0,
        "name": {
          "first": "Fields",
          "last": "Chaney"
        },
        "address": "530 Maple Avenue, Lewis, Wyoming, 2493",
        "description": "Ea consequat ullamco officia commodo incididunt reprehenderit excepteur Lorem. Do irure amet in veniam laborum occaecat exercitation enim. Adipisicing nostrud cillum dolor ullamco sint nisi do sint consequat. Exercitation labore dolore laboris veniam qui occaecat amet laborum esse eu anim pariatur. Id sunt pariatur aliquip occaecat deserunt laboris consectetur adipisicing cillum fugiat."
      },
      {
        "id": 1,
        "name": {
          "first": "Wendi",
          "last": "Mcpherson"
        },
        "address": "108 Wythe Place, Hickory, Idaho, 7133",
        "description": "Do aliquip commodo excepteur deserunt nulla ipsum est qui dolor commodo eiusmod aliquip culpa ut. Ea duis sit nisi aliqua et veniam enim est. Et ullamco qui excepteur deserunt ex esse cupidatat mollit."
      },
      {
        "id": 2,
        "name": {
          "first": "Meadows",
          "last": "Walter"
        },
        "address": "588 Cove Lane, Craig, Minnesota, 5990",
        "description": "Anim anim esse laborum minim consequat eu irure anim magna elit minim sint ut dolor. Sint in reprehenderit nostrud est do cupidatat enim veniam ad. Et occaecat dolore mollit fugiat elit consequat do."
      },
      {
        "id": 3,
        "name": {
          "first": "Mckenzie",
          "last": "Greene"
        },
        "address": "378 Will Place, Bawcomville, North Dakota, 181",
        "description": "Ut velit excepteur aliquip ut dolore sint reprehenderit. Irure ipsum duis nulla reprehenderit voluptate laborum esse laboris. Aliqua laborum non nulla velit quis sit qui magna deserunt ad non mollit exercitation. In ut qui laborum amet elit eiusmod est voluptate sunt proident commodo laboris ad aliqua. Commodo tempor sunt reprehenderit aute eu enim dolor eiusmod magna cillum."
      },
      {
        "id": 4,
        "name": {
          "first": "Jenny",
          "last": "Briggs"
        },
        "address": "362 Dwight Street, Brewster, Delaware, 2506",
        "description": "Labore eu aliqua esse tempor Lorem minim amet amet sint Lorem adipisicing sint dolore. Magna Lorem mollit sunt aliquip cillum. Ea occaecat occaecat et aliqua sit duis officia. Ipsum sunt excepteur tempor mollit ex nostrud pariatur anim labore proident aliqua aliquip. Fugiat ullamco enim laborum dolore in eiusmod ullamco ullamco sint commodo esse."
      },
      {
        "id": 5,
        "name": {
          "first": "Burton",
          "last": "Delacruz"
        },
        "address": "537 Bayview Place, Crumpler, South Carolina, 8252",
        "description": "Officia dolor ipsum velit consectetur cupidatat aute reprehenderit deserunt ad dolor. Eu anim tempor in officia occaecat ea voluptate nostrud excepteur irure. Excepteur consectetur eiusmod qui laborum fugiat adipisicing."
      },
      {
        "id": 6,
        "name": {
          "first": "Valdez",
          "last": "Hampton"
        },
        "address": "703 Hornell Loop, Franklin, Indiana, 3788",
        "description": "Nulla non id reprehenderit sunt qui laboris consequat aute quis. Ex anim veniam id sit. Tempor do esse nulla minim id velit aute laborum dolore qui consectetur adipisicing."
      },
      {
        "id": 7,
        "name": {
          "first": "Lucia",
          "last": "Carlson"
        },
        "address": "877 Beacon Court, Elliott, Hawaii, 8797",
        "description": "Aliqua amet cillum sit et Lorem ad esse. Est culpa dolor laboris sit sunt velit enim. Consequat commodo amet amet eiusmod reprehenderit."
      },
      {
        "id": 8,
        "name": {
          "first": "Booth",
          "last": "Waters"
        },
        "address": "413 Hopkins Street, Ona, Kentucky, 5306",
        "description": "Commodo cillum veniam sunt nisi fugiat sunt ad. Cupidatat qui enim officia dolore fugiat. Ut anim laboris nisi cillum magna cillum cillum ad sit consectetur incididunt officia et nostrud. Sunt adipisicing nisi tempor irure incididunt tempor nisi mollit aliqua in quis. Minim reprehenderit sunt ipsum commodo magna consectetur dolor. Eu quis cillum elit nisi. Sunt qui exercitation mollit aliqua duis elit eiusmod cillum ullamco et consectetur."
      },
      {
        "id": 9,
        "name": {
          "first": "Vaughan",
          "last": "Pate"
        },
        "address": "522 Commerce Street, Remington, Maryland, 6851",
        "description": "Do dolor eu quis sint elit non reprehenderit consectetur. Ex labore incididunt duis Lorem proident anim ex cupidatat. Velit adipisicing consequat deserunt laboris. Voluptate commodo amet cillum minim mollit proident et eiusmod dolore duis irure fugiat reprehenderit. Incididunt anim qui nostrud eu ipsum cillum."
      }
    ];

    public subjects: Subject[] = [
      {
        "name": "Math",
        "teacher": "Ms.Vinson",
        "cabiner": 408,
        "description": "Velit qui occaecat aliqua labore incididunt mollit qui ea adipisicing enim veniam labore ullamco elit. Culpa labore officia consequat elit anim ut exercitation non cillum proident sunt in. Sit exercitation non officia enim aute irure incididunt adipisicing minim qui consequat. Quis enim et veniam est qui veniam duis consectetur exercitation sunt deserunt esse laborum.",
        "marks": [
          {
            date: "04/02",
            studentsMarks: [, 4, , 6, , 10, 8, 9, , ],
          },
          {
            date: "05/02",
            studentsMarks: [ 6, , , 9, , 4, , 9, 9, ],
          },
          {
            date: "06/02",
            studentsMarks: [ , 7, , , 9, 7, , 9, 7, 7],
          },
          {
            date: "07/02",
            studentsMarks: [ 7, 9, , 6, 5, , , 8, , 7 ],
          },
        ]
      },
      {
        "name": "English",
        "teacher": "Ms.Lowe",
        "cabiner": 817,
        "description": "Ipsum officia culpa dolor eiusmod. Sunt consequat commodo tempor proident fugiat qui excepteur ut in aute qui. Voluptate non anim exercitation cupidatat do reprehenderit. Exercitation magna in non ad in ullamco occaecat voluptate cupidatat. Ullamco ut est aliqua amet ex aute incididunt quis proident fugiat deserunt velit. Elit labore quis sit dolore. Labore ullamco ullamco anim culpa consequat cupidatat quis velit fugiat deserunt ullamco.",
        "marks": [
          {
            date: "04/02",
            studentsMarks: [, 4, , 6, , 10, 8, 9, ,  ],
          },
          {
            date: "05/02",
            studentsMarks: [ 6, , , 9, , 4, , 9, 9, ],
          },
          {
            date: "06/02",
            studentsMarks: [ , 7, , , 9, 7, , 9, 7, 7],
          },
          {
            date: "07/02",
            studentsMarks: [ 7, 9, , 6, 5, , , 8, , 7 ],
          },
        ]
      },
      {
        "name": "Biology",
        "teacher": "Ms.Burnett",
        "cabiner": 645,
        "description": "Eiusmod id anim do velit. Quis velit nisi fugiat cillum. Laboris velit ex qui eu consectetur. Ea ut dolore tempor dolor duis deserunt dolor voluptate. Nisi consequat proident velit minim pariatur sint. Ad adipisicing do esse excepteur.",
        "marks": [
          {
            date: "04/02",
            studentsMarks: [, 4, , 6, , 10, 8, 9, ,  ],
          },
          {
            date: "05/02",
            studentsMarks: [ 6, , , 9, , 4, , 9, 9, ],
          },
          {
            date: "06/02",
            studentsMarks: [ , 7, , , 9, 7, , 9, 7, 7],
          },
          {
            date: "07/02",
            studentsMarks: [ 7, 9, , 6, 5, , , 8, , 7 ],
          },
        ]
      },
      {
        "name": "Chemistry",
        "teacher": "Ms.Fischer",
        "cabiner": 253,
        "description": "Nisi amet do consectetur incididunt ut nisi do esse elit commodo. Aute deserunt et cupidatat ipsum in eiusmod et et exercitation dolore nostrud aliquip proident sunt. Sunt consequat pariatur laborum nostrud aliquip labore pariatur fugiat ex. Laboris velit mollit quis proident laboris exercitation quis ipsum velit eu proident dolore. Est aliqua nulla quis reprehenderit consequat. Amet pariatur non pariatur excepteur.",
        "marks": [
          {
            date: "04/02",
            studentsMarks: [7, 5, , , , 7, 8, 9, , 8 ],
          },
          {
            date: "05/02",
            studentsMarks: [ , 8, 10, , 3, , 6, 7, , ],
          },
          {
            date: "06/02",
            studentsMarks: [ , , , 8, 8, , 6, 9, , 8],
          },
          {
            date: "07/02",
            studentsMarks: [ , , 5, 10, , 9, , , 8, 5 ],
          },
        ]
      }
    ];

  public getStudents(): Array<Student> {
    return this.students;
  }

  public getSubjects(): Array<Subject> {
    return this.subjects;
  }

  public addStudent(newStudent: Student): void {
    this.students.push(newStudent);
  }

  public addSubject(newSubject: Subject): void {
    this.subjects.push(newSubject);
  }
}
