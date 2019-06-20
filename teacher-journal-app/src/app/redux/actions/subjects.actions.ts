import { Action } from "@ngrx/store";
import { Subject } from "../../common/classes/subject";

export const LOAD_SUBJECTS: string = "[Subject] Load Subjects";
export const LOAD_SUBJECTS_FAIL: string = "[Subject] Load Subjects Fails";
export const LOAD_SUBJECTS_SUCCESS: string = "[Subject] Load Subjects Succeed";
export const ADD_SUBJECT: string = "[Subject] Add Subject";
export const UPDATE_SUBJECT: string = "[Subject] Update Subject";

export class LoadSubjects implements Action {
    public readonly type: string = LOAD_SUBJECTS;
}

export class LoadSubjectsFail implements Action {
    public readonly type: string = LOAD_SUBJECTS_FAIL;
    constructor(public payload: any) {}
}

export class LoadSubjectsSuccess implements Action {
    public readonly type: string = LOAD_SUBJECTS_SUCCESS;
    constructor(public payload: Subject[]) {}
}

export class AddSubject implements Action {
    public readonly type: string = ADD_SUBJECT;
    constructor(public payload: Subject) {}
}

export class UpdateSubject implements Action {
    public readonly type: string = UPDATE_SUBJECT;
    constructor(public payload: Subject) {}
}

export type SubjectActions = LoadSubjects | LoadSubjectsFail | LoadSubjectsSuccess | AddSubject | UpdateSubject;
