import { Action } from "@ngrx/store";
import { Subject } from "../common/classes/subject";

export const ADD_SUBJECT = "[Subject Form] AddSubject";

export class addSubject implements Action {
    readonly type = ADD_SUBJECT;
    constructor(public payload: Subject) {}
}

export type Actions = addSubject;
