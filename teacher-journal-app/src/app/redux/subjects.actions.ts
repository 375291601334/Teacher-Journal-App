import { Action } from "@ngrx/store";
import { Subject } from "../common/classes/subject";

export const ADD_SUBJECT = "[Subject Form] AddSubject";
export const UPDATE_SUBJECT = "[Subject Form] UpdateSubject";

export class addSubject implements Action {
    readonly type = ADD_SUBJECT;
    constructor(public payload: Subject) {}
}

export class updateSubject implements Action {
    readonly type = UPDATE_SUBJECT;
    constructor(public payload: Subject) {}
}

export type Actions = addSubject | updateSubject;
