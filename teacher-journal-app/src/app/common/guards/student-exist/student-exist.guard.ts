import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable} from "rxjs";
import { tap, map, filter, take, switchMap  } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { State } from "../../../redux/reducers/combineReducers";
import { selectStudentsLoaded, selectStudents } from "src/app/redux/selectors/students.selectors";
import { LoadStudents } from "src/app/redux/actions/students.actions";

@Injectable({
  providedIn: "root"
})
export class StudentExistGuard implements CanActivate {

  constructor(private store: Store<State>, private router: Router) {}

  public canActivate(root: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap( () => {
        const studentFullName: string = root.params.id;
        return this.studentExists(studentFullName);
      })
    );
  }

  public studentExists(fullName: string): Observable<boolean> {
    const nameSeparator: number = fullName.indexOf("_");
    const lastName: string = fullName.slice(0, nameSeparator);
    const firstName: string = fullName.slice(nameSeparator + 1, fullName.length);
    return this.store.select(selectStudents).pipe(
      map( students => {
        if ( students.some( student => (student.name.first === firstName && student.name.last === lastName)) ) {
          return true;
        }
        this.router.navigate(["/page-not-found"]);
        return false;
      }),
      take(1)
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
