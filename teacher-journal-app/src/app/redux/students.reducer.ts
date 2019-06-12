import { Action } from "@ngrx/store";
import { Subject } from "../common/classes/subject";
import { Student } from "../common/classes/student";
import * as DataActions from "./students.actions";

const initialState: Student[] = [
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


export function studentReducer(state: Student[] = initialState, action: DataActions.Actions) {
    switch(action.type) {
        case DataActions.ADD_STUDENT:
            return [...state, action.payload];
        default:
            return state;
    }
}