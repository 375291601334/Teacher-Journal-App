import { Action } from "@ngrx/store";
import { Student } from "../common/classes/student";

export const ADD_STUDENT = "[Student] Add Student";

export class addStudent implements Action {
    readonly type = ADD_STUDENT;
    constructor(public payload: Student) {}
}

export type Actions = addStudent;
