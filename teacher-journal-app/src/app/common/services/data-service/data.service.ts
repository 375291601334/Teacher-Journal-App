import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { retry } from "rxjs/operators";
import { Student } from "../../classes/student";
import { catchError } from "rxjs/operators";
import { Subject } from "../../classes/subject";

@Injectable({
  providedIn: "root"
})

export class DataService {
  private url: string = "assets/data.json";

  constructor(private http: HttpClient) {}

  public getStudents(): Observable<any> {
    return this.http.get<Student[]>("http://localhost:8080/api/getStudents")
    .pipe(
      retry(3),
      catchError( (error: any) => Observable.throw(error.json()))
    );
  }

  public getSubjects(): Observable<any> {
    return this.http.get<Subject[]>("http://localhost:8080/api/getSubjects")
    .pipe(
      retry(3),
      catchError( (error: any) => Observable.throw(error.json()))
    );
  }

  public addNewStudent(newStudent: Student): Observable<any> {
    return this.http.post(
      "http://localhost:8080/api/addStudent",
      newStudent
    );
  }

  public addNewSubject(newSubject: Subject): Observable<any> {
    return this.http.post(
      "http://localhost:8080/api/addSubject",
      newSubject
    );
  }

  public updateSubject(subject: Subject): Observable<any> {
    return this.http.put(
      "http://localhost:8080/api/updateSubject",
      subject
    );
  }

}
