import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SaveChangesDialogService {

  public confirm(): Observable<boolean> {
    const confirmation: boolean = window.confirm("Do you want to leave without saving? ALL YOUR CHANGES WILL BE CANCELED!!!");

    return of(confirmation);
  }
}
