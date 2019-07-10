import { ActionReducerMap } from "@ngrx/store";
import * as fromStudents from "./studentReducer";
import * as fromSubjects from "./subjectReducer";

export interface State {
    students: fromStudents.StudentsState;
    subjects: fromSubjects.SubjectsState;
}

export const reducers: ActionReducerMap<State> = {
    students: fromStudents.reducer,
    subjects: fromSubjects.reducer
};
