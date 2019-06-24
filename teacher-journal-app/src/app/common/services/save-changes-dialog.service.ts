import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: "root"
})
export class SaveChangesDialogService {
  public message: string;

  constructor(private translate: TranslateService) {}

  public confirm(): Observable<boolean> {
    this.translate.get("Do you want to leave without saving? ALL YOUR CHANGES WILL BE CANCELED!!!")
    .subscribe(
      (result: string) => {
        this.message = result;
      });
    const confirmation: boolean = window.confirm(this.message);
    return of(confirmation);
  }
}
