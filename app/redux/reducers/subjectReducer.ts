import { Subject } from "../../common/classes/subject";
import * as fromSubjects from "../actions/subjects.actions";

export interface SubjectsState {
  data: Subject[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: SubjectsState = {
  data: [],
  loading: false,
  loaded: false
};

export function reducer(state: SubjectsState = initialState, action: fromSubjects.SubjectActions): SubjectsState {
    switch  (action.type) {
      case fromSubjects.LOAD_SUBJECTS:
        return {
          ...state,
          loading: true
        };

      case fromSubjects.LOAD_SUBJECTS_FAIL:
        return {
          ...state,
          loading: false,
          loaded: false
        };

      case fromSubjects.LOAD_SUBJECTS_SUCCESS:
        const data: Subject[] = action.payload;
        return {
          ...state,
          data,
          loading: false,
          loaded: true
        };

      case fromSubjects.ADD_SUBJECT:
        return {
          ...state,
          data: [...state.data, action.payload]
        };

      case fromSubjects.UPDATE_SUBJECT:
        const updatedSubject: Subject = action.payload;
        const newData: Subject[] = state.data.map( (subject) => {
          if (subject.name === updatedSubject.name) {
            return updatedSubject;
          } else {
            return subject;
          }
        });
        return {
          ...state,
          data: newData
        };

        default:
            return state;
    }
}

export const getSubjectsloading: any = (state: SubjectsState) => state.loading;
export const getSubjectsloaded: any = (state: SubjectsState) => state.loaded;
export const getSubjects: any = (state: SubjectsState) => state.data;
