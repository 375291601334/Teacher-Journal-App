import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable} from "rxjs";
import { tap, map, filter, take, switchMap  } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { State } from "../../../redux/reducers/combineReducers";
import { selectSubjectsLoaded, selectSubjects } from "../../../redux/selectors/subjects.selectors";
import { LoadSubjects } from "../../../redux/actions/subjects.actions";

@Injectable({
  providedIn: "root"
})
export class SubjectExistGuard implements CanActivate {

  constructor(private store: Store<State>, private router: Router) {}

  public canActivate(root: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap( () => {
        const subjectName: string = root.params.id;
        return this.subjectExists(subjectName);
      })
    );
  }

  public subjectExists(name: string): Observable<boolean> {
    return this.store.select(selectSubjects).pipe(
      map( subjects => {
        if (subjects.some( subject => subject.name === name)) {
          return true;
        }
        this.router.navigate(["/page-not-found"]);
        return false;
      }),
      take(1)
    );
  }

  public checkStore(): Observable<boolean> {
    return this.store.select(selectSubjectsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new LoadSubjects());
        }
      }),
      filter( loaded => loaded ),
      take(1)
    );
  }
}
