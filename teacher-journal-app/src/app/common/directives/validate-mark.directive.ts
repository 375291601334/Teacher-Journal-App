import { Directive, Renderer2, ElementRef  } from "@angular/core";
import { NG_VALIDATORS } from "@angular/forms";
import { MAX_MARK, MIN_MARK } from "../../shared/constants/constants";

@Directive({
  selector: "[appValidateMark][ngModel]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidateMarkDirective, multi: true }
  ]
})
export class ValidateMarkDirective  {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  public validate(formItem: any): null | {} {
    const inputValue: number = formItem.value;
    if (inputValue > MAX_MARK || inputValue < MIN_MARK) {
      this.renderer.setAttribute(this.el.nativeElement, "title", `Mark must be between ${MIN_MARK} and ${MAX_MARK}!!!`);
      return { appValidateMark: true };
    }
    this.renderer.removeAttribute(this.el.nativeElement, "title");
    return null;
  }
}
