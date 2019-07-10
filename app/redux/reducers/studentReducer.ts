import { Student } from "../../common/classes/student";
import * as fromStudents from "../actions/students.actions";

export interface StudentsState {
    data: Student[];
    loading: boolean;
    loaded: boolean;
}

export const initialState: StudentsState = {
    data: [],
    loading: false,
    loaded: false
  };

export function reducer(state: StudentsState = initialState, action: fromStudents.StudentActions): StudentsState {
    switch (action.type) {
        case fromStudents.LOAD_STUDENTS:
            return {
                ...state,
                loading: true
            };

        case fromStudents.LOAD_STUDENTS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false
            };

        case fromStudents.LOAD_STUDENTS_SUCCESS: {
                const data: Student[] = action.payload;
                return {
                    ...state,
                    data,
                    loading: false,
                    loaded: true
                };
            }

        case fromStudents.ADD_STUDENT:
            return {
                ...state,
                data: [...state.data, action.payload]
            };

        default:
            return state;
    }
}

export const getStudentsloading: any = (state: StudentsState) => state.loading;
export const getStudentsloaded: any = (state: StudentsState) => state.loaded;
export const getStudents: any = (state: StudentsState) => state.data;
