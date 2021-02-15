import { Directive, Input, Renderer2, ElementRef } from "@angular/core";
import { NG_VALIDATORS, Validator } from "@angular/forms";
import { Marks } from "../classes/subject";

@Directive({
  selector: "[appValidateDate]",
  providers: [{provide: NG_VALIDATORS, useExisting: ValidateDateDirective, multi: true}]
})
export class ValidateDateDirective implements Validator {
  @Input() public marks: Marks[];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  public validate(formItem: any): {} | null {
    if (!formItem.pristine) {
      if ( this.marks.some( markObj => markObj.date === formItem.value) ) {
        this.renderer.setAttribute(this.el.nativeElement, "title", "This date is not unique!!!");
        return { appValidateDate: true };
      }
      this.renderer.removeAttribute(this.el.nativeElement, "title");
      return null;
    }
  }
}
