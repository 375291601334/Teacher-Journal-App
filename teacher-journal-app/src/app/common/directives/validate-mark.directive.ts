import { Directive, Renderer2, ElementRef  } from "@angular/core";
import { NG_VALIDATORS } from "@angular/forms";
import { MAX_MARK, MIN_MARK } from "../../shared/constants/constants";
import {TranslateService} from "@ngx-translate/core";

@Directive({
  selector: "[appValidateMark][ngModel]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidateMarkDirective, multi: true }
  ]
})
export class ValidateMarkDirective  {

  constructor(private renderer: Renderer2, private el: ElementRef, private translate: TranslateService) {}

  public validate(formItem: any): null | {} {
    const inputValue: number = formItem.value;
    let message: string;

    this.translate.get("Mark must be between")
    .subscribe(
      (result: string) => {
        message = result;
      });

    if (inputValue > MAX_MARK || inputValue < MIN_MARK) {
      this.renderer.setAttribute(this.el.nativeElement, "title", `${message} ${MIN_MARK} ... ${MAX_MARK}!!!`);
      return { appValidateMark: true };
    }
    this.renderer.removeAttribute(this.el.nativeElement, "title");
    return null;
  }
}
