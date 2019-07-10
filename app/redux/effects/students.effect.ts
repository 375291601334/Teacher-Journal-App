import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { LOAD_STUDENTS, LoadStudentsSuccess, LoadStudentsFail } from "../actions/students.actions";
import { DataService } from "../../common/services/data-service/data.service";
import { SortPipe } from "../../common/pipes/sort.pipe";

@Injectable()

export class StudentsEffects {
    @Effect()
    public loadStudents$: Observable<Action> = this.actions$.pipe(
        ofType(LOAD_STUDENTS),
        switchMap( () => {
            return this.service.getStudents().pipe(
                map( data => {
                    data = this.sortPipe.transform(data, "_id", false );
                    return new LoadStudentsSuccess(data);
                }),
                catchError( error => of(new LoadStudentsFail(error)) )
            );
        })
    );

    constructor(private actions$: Actions, private service: DataService, private sortPipe: SortPipe) {}
}
