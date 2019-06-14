import { Subject } from "../common/classes/subject";
import * as DataActions from "./subjects.actions";

const data: {students: [], subjects: []} = require("../../assets/data.json");

const initialState: Subject[] = data.subjects;

export function subjectReducer(state: Subject[] = initialState, action: DataActions.Actions): Subject[] {
    switch  (action.type) {
      case DataActions.ADD_SUBJECT:
        return [...state, action.payload];

      case DataActions.UPDATE_SUBJECT:
        const updatedSubject: Subject = action.payload;
        const newState: Subject[] = state.map( (subject) => {
          if (subject.name === updatedSubject.name) {
            return updatedSubject;
          } else {
            return subject;
          }
        });
        return newState;

        default:
            return state;
    }
}
