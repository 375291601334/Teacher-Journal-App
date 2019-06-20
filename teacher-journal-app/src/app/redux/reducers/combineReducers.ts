import { ActionReducerMap, createSelector } from "@ngrx/store";
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

export const selectStudentsState = (state: State) => state.students;
export const selectStudents = createSelector(selectStudentsState, fromStudents.getStudents);
export const selectStudentsLoading = createSelector(selectStudentsState, fromStudents.getStudentsloading);
export const selectStudentsLoaded = createSelector(selectStudentsState, fromStudents.getStudentsloaded);

export const selectSubjectsState = (state: State) => state.subjects;
export const selectSubjects = createSelector(selectSubjectsState, fromSubjects.getSubjects);
export const selectSubjectsLoading = createSelector(selectSubjectsState, fromSubjects.getSubjectsloading);
export const selectSubjectsLoaded = createSelector(selectSubjectsState, fromSubjects.getSubjectsloaded);
