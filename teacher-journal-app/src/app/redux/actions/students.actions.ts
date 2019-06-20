import { Action } from "@ngrx/store";
import { Student } from "../../common/classes/student";

export const LOAD_STUDENTS: string = "[Student] Load Students";
export const LOAD_STUDENTS_FAIL: string = "[Student] Load Students Fails";
export const LOAD_STUDENTS_SUCCESS: string = "[Student] Load Students Succeed";
export const ADD_STUDENT: string = "[Student] Add Student";

export class LoadStudents implements Action {
    public readonly type: string = LOAD_STUDENTS;
}

export class LoadStudentsFail implements Action {
    public readonly type: string = LOAD_STUDENTS_FAIL;
    constructor(public payload: any) {}
}

export class LoadStudentsSuccess implements Action {
    public readonly type: string = LOAD_STUDENTS_SUCCESS;
    constructor(public payload: Student[]) {}
}

export class AddStudent implements Action {
    public readonly type: string = ADD_STUDENT;
    constructor(public payload: Student) {}
}

export type StudentActions = LoadStudents | LoadStudentsFail | LoadStudentsSuccess | AddStudent;
