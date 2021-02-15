import { Student } from "../common/classes/student";
import * as DataActions from "./students.actions";

const data: {students: [], subjects: []} = require("../../assets/data.json");

const initialState: Student[] = data.students;

export function studentReducer(state: Student[] = initialState, action: DataActions.Actions): Student[] {
    switch (action.type) {
        case DataActions.ADD_STUDENT:
            return [...state, action.payload];
        default:
            return state;
    }
}
