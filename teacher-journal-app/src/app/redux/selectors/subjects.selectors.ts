import { createSelector } from "@ngrx/store";
import { State } from "../reducers/combineReducers";
import * as fromSubjects from "../reducers/subjectReducer";

export const selectSubjectsState: any = (state: State) => state.subjects;
export const selectSubjects: any = createSelector(selectSubjectsState, fromSubjects.getSubjects);
export const selectSubjectsLoading: any = createSelector(selectSubjectsState, fromSubjects.getSubjectsloading);
export const selectSubjectsLoaded: any = createSelector(selectSubjectsState, fromSubjects.getSubjectsloaded);
