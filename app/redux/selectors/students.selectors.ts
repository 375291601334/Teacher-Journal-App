import { createSelector } from "@ngrx/store";
import { State } from "../reducers/combineReducers";
import * as fromStudents from "../reducers/studentReducer";

export const selectStudentsState: any = (state: State) => state.students;
export const selectStudents: any = createSelector(selectStudentsState, fromStudents.getStudents);
export const selectStudentsLoading: any = createSelector(selectStudentsState, fromStudents.getStudentsloading);
export const selectStudentsLoaded: any = createSelector(selectStudentsState, fromStudents.getStudentsloaded);
