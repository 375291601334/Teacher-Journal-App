import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  students = [
    {
      "id": 0,
      "name": {
        "first": "Brooke",
        "last": "Reilly"
      },
      "address": "401 Albee Square, Hillsboro, Connecticut, 4642",
      "description": "Ea duis ea culpa ullamco consequat enim aliquip aliqua reprehenderit sunt. Elit proident cillum proident aute quis. Esse nulla non do qui nostrud aliquip ut Lorem officia culpa ipsum. Labore ex fugiat exercitation nisi laboris.",
      "subjects": {
        "Math":{
          "04/02": 8,
          "07/02": 3
        },
        "English": {
          "05/02": 9,
          "06/02": 6,
          "07/02": 6
        },
        "Biology": {
            "04/02": 6,
        },
        "Chemistry": {
            "04/02": 2,
        }
      }
    },
    {
      "id": 1,
      "name": {
        "first": "Baker",
        "last": "Reeves"
      },
      "address": "645 Cranberry Street, Cherokee, Wisconsin, 1975",
      "description": "Non minim laboris labore dolore duis veniam. Consequat et excepteur labore laboris adipisicing duis nulla officia mollit ipsum elit. Occaecat laborum proident labore quis pariatur sunt aliqua cillum aliqua ipsum sunt excepteur enim. Adipisicing eiusmod dolor ullamco mollit nisi. Proident officia ad adipisicing in enim eiusmod sunt Lorem aliquip consectetur. Quis fugiat reprehenderit velit ullamco fugiat. Ex consectetur nulla ullamco consequat exercitation veniam aliquip nulla.",
      "subjects": {
        "Math": {
          "05/02": 8,
          "06/02": 8,
          "07/02": 9
        },
        "English": {
          "04/02": 1,
          "06/02": 10,
          "07/02": 4
        },
        "Biology": {
          "04/02": 8,
          "05/02": 3,
          },
        "Chemistry": {
          "04/02": 6,
          "05/02": 6,
          "06/02": 10,
        }
      }
    },
    {
      "id": 2,
      "name": {
        "first": "Hendrix",
        "last": "Mccullough"
      },
      "address": "389 Tampa Court, Coultervillle, South Dakota, 5335",
      "description": "Sunt proident officia occaecat nulla do veniam dolore enim in. Incididunt adipisicing tempor quis aliqua. Anim velit laborum irure magna enim exercitation magna do voluptate. Qui est dolore do est incididunt qui sit commodo nostrud magna in fugiat sint. Consectetur eu aliqua sit aliqua aliqua consectetur veniam tempor consectetur Lorem.",
      "subjects": {
        "Math": {
          "06/02": 6,
          "07/02": 8
        },
        "English": {
          "06/02": 4,
          "07/02": 4
        },
        "Biology": {
          "04/02": 10,
          "05/02": 5,
          "07/02": 3
        },
        "Chemistry": {
          "05/02": 6,
          "06/02": 10,
          "07/02": 1
        }
      }
    },
    {
      "id": 3,
      "name": {
        "first": "Burris",
        "last": "Price"
      },
      "address": "647 Garden Street, Cassel, North Dakota, 1519",
      "description": "Voluptate est id occaecat laborum culpa. Veniam sunt Lorem voluptate adipisicing dolor elit. Sunt sunt aliquip sit nisi nisi ullamco voluptate id exercitation non. Dolore et mollit velit exercitation incididunt elit id tempor irure ut sit incididunt sit. Ut non mollit qui velit in Lorem consectetur voluptate culpa cillum cillum cillum consectetur adipisicing.",
      "subjects": {
        "Math": {
          "04/02": 3,
          "06/02": 9,
          "07/02": 9
        },
        "English": {
          "04/02": 5,
          "05/02": 4,
        },
        "Biology": {
          "06/02": 7,
          "07/02": 10
        },
        "Chemistry": {
          "04/02": 6,
          "05/02": 5,
          "06/02": 5,
        }
      }
    },
    {
      "id": 4,
      "name": {
        "first": "Vang",
        "last": "Avery"
      },
      "address": "545 Remsen Avenue, Berlin, Nevada, 6758",
      "description": "In ipsum deserunt mollit enim ullamco consectetur laborum officia. Aute Lorem ad fugiat nisi cupidatat cillum labore elit laboris. Voluptate nisi fugiat aute ad cupidatat consectetur eu.",
      "subjects": {
        "Math": {
          "04/02": 7,
          "06/02": 6,
        },
        "English": {
          "04/02": 3,
          "05/02": 3,
          "06/02": 8,
          "07/02": 5
        },
        "Biology": {
          "04/02": 7,
          "05/02": 5,
          "07/02": 3
        },
        "Chemistry": {
          "04/02": 9,
          "05/02": 3,
          "06/02": 6,
          "07/02": 3
        }
      }
    },
    {
      "id": 5,
      "name": {
        "first": "Ramsey",
        "last": "Morgan"
      },
      "address": "894 Pioneer Street, Holtville, Missouri, 7662",
      "description": "Consequat nostrud laboris exercitation consectetur enim ea ipsum Lorem. Veniam consequat deserunt laboris officia ex excepteur officia est cillum consectetur. Veniam sunt exercitation pariatur deserunt consequat pariatur labore sunt amet id. Veniam consectetur occaecat excepteur Lorem sunt ex proident nulla ad quis amet aliquip aute ad.",
      "subjects": {
        "Math": {
          "04/02": 3,
          "06/02": 5,
        },
        "English": {
          "05/02": 8,
          "07/02": 7
        },
        "Biology": {
          "07/02": 9
        },
        "Chemistry": {
          "04/02": 9,
          "05/02": 3,
          "07/02": 2
        }
      }
    },
    {
      "id": 6,
      "name": {
        "first": "Jolene",
        "last": "Herrera"
      },
      "address": "790 Dearborn Court, Irwin, West Virginia, 4282",
      "description": "Aute Lorem eu ad enim ex ipsum in do minim ex ullamco amet culpa deserunt. Minim esse exercitation excepteur proident. Elit nulla fugiat id nisi proident excepteur commodo irure et labore est id est.",
      "subjects": {
        "Math": {
          "05/02": 6,
          "06/02": 7,
          "07/02": 6
        },
        "English": {
          "04/02": 10,
          "07/02": 5
        },
        "Biology": {
          "07/02": 6
        },
        "Chemistry": {
          "05/02": 7,
          "06/02": 10,
          "07/02": 9
        }
      }
    },
    {
      "id": 7,
      "name": {
        "first": "Daugherty",
        "last": "Bean"
      },
      "address": "416 Hancock Street, Greenbush, Alabama, 6784",
      "description": "Duis elit mollit dolor ea magna ut. Quis dolore cillum esse reprehenderit veniam nisi. Exercitation id amet incididunt ipsum voluptate nulla amet ad ea proident fugiat.",
      "subjects": {
        "Math": {
          "06/02": 8,
          "07/02": 9
        },
        "English": {
          "04/02": 5,
          "05/02": 1,
          "07/02": 9
        },
        "Biology": {
          "04/02": 2,
          "05/02": 2
        },
        "Chemistry": {
          "04/02": 7,
          "05/02": 1
        }
      }
    },
    {
      "id": 8,
      "name": {
        "first": "Sandy",
        "last": "Chase"
      },
      "address": "498 Madoc Avenue, Spelter, Kansas, 9675",
      "description": "Est duis nulla aute cillum tempor cillum pariatur. Id veniam est ipsum et aliquip do irure duis sunt amet excepteur ea enim ad. Dolore pariatur id et dolor aliqua amet aliquip ipsum velit ex. Ut elit et fugiat mollit aute fugiat do Lorem mollit dolor ipsum. Elit sit elit ipsum nostrud.",
      "subjects": {
        "Math": {
          "04/02": 8,
          "05/02": 10,
          "07/02": 5
        },
        "English": {
          "04/02": 4,
          "06/02": 3,
          "07/02": 6
        },
        "Biology": {
          "04/02": 10,
          "05/02": 5
        },
        "Chemistry": {
          "06/02": 3,
          "07/02": 1
        }
      }
    },
    {
      "id": 9,
      "name": {
        "first": "Marshall",
        "last": "Stevens"
      },
      "address": "602 Barwell Terrace, Fidelis, Arizona, 8309",
      "description": "Amet laborum in sit tempor id commodo do sint laboris. Commodo nisi adipisicing proident fugiat in laborum excepteur ea. Laborum adipisicing velit ipsum occaecat dolore ullamco ea tempor sit irure. Enim ipsum do duis dolore ullamco magna et fugiat est ut et anim. Do qui duis elit occaecat ex anim sunt minim esse ex id esse.",
      "subjects": {
        "Math": {
          "04/02": 2,
          "05/02": 4,
          "07/02": 8
        },
        "English": {
          "04/02": 6,
        },
        "Biology": {
          "05/02": 8,
          "06/02": 2,
          "07/02": 3
        },
        "Chemistry": {
          "04/02": 3,
          "07/02": 2
        }
      }
    },
    {
      "id": 10,
      "name": {
        "first": "Deann",
        "last": "Mayer"
      },
      "address": "584 Raleigh Place, Dunnavant, Texas, 8877",
      "description": "Amet elit deserunt mollit sit ullamco fugiat nisi consectetur. Labore laborum laborum anim irure do. Id labore do magna enim anim occaecat cupidatat dolor minim culpa qui id pariatur.",
      "subjects": {
        "Math": {
          "04/02": 9,
          "05/02": 4,
          "06/02": 7,
          "07/02": 6
        },
        "English": {
          "04/02": 2,
          "05/02": 6,
          "06/02": 5,
        },
        "Biology": {
          "04/02": 7,
          "05/02": 7,
          "07/02": 7
        },
        "Chemistry": {
          "04/02": 2,
          "06/02": 1,
          "07/02": 4
        }
      }
    }
  ];

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
  ];

  getStudents() {
    return this.students;
  }

  getSubjects() {
    return this.subjects;
  }

  addStudent(newStudent) {
    this.students.push(newStudent);
  }

  addSubject(newSubject) {
    this.subjects.push(newSubject);
  }

  addSubjectToStudents(subjectName) {
    this.students.forEach( (student) => {
      this.students[student.id].subjects[subjectName] = {};
    }
    );
  }
  
}
