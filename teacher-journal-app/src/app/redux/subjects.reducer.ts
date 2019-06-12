import { Action } from "@ngrx/store";
import { Subject } from "../common/classes/subject";
import * as DataActions from "./subjects.actions";

const initialState: Subject[] = [
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

export function subjectReducer(state: Subject[] = initialState, action: DataActions.Actions) {
    switch(action.type) {
        case DataActions.ADD_SUBJECT:
            return [...state, action.payload];
        default:
            return state;
    }
}
