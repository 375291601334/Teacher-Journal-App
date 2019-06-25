import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { retry } from "rxjs/operators";
import { Student } from "../../classes/student";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})

export class DataService {
  private url: string = "assets/data.json";

  constructor(private http: HttpClient) {}

  public getJSONData(): Observable<any> {
    return this.http.get<Student[]>(this.url)
    .pipe(
      retry(3),
      catchError( (error: any) => Observable.throw(error.json()))
    );
  }
}
