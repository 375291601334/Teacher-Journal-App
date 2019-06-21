import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable, of } from "rxjs";
import { tap, filter, take, switchMap, catchError } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { State } from "../../../redux/reducers/combineReducers";
import { selectStudentsLoaded } from "../../../redux/selectors/students.selectors";
import { LoadStudents } from "../../../redux/actions/students.actions";

@Injectable({
  providedIn: "root"
})

export class StudentsGuard implements CanActivate {

  constructor(private store: Store<State>) {}

  public canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  public checkStore(): Observable<boolean> {
    return this.store.select(selectStudentsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new LoadStudents());
        }
      }),
      filter( loaded => loaded ),
      take(1)
    );
  }
}
