import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { LOAD_SUBJECTS, LoadSubjectsSuccess, LoadSubjectsFail } from "../actions/subjects.actions";
import { DataService } from "../../common/services/data.service";

@Injectable()

export class SubjectsEffects {
    @Effect()
    public loadSubjects$: Observable<Action> = this.actions$.pipe(
        ofType(LOAD_SUBJECTS),
        switchMap( () => {
            return this.service.getJSONData().pipe(
                map( data => new LoadSubjectsSuccess(data.subjects) ),
                catchError( error => of(new LoadSubjectsFail(error)) )
            );
        })
    );

    constructor(private actions$: Actions, private service: DataService) {}
}
