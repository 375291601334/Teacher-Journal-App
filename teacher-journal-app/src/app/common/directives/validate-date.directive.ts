import { Directive, Input, Renderer2, ElementRef } from "@angular/core";
import { NG_VALIDATORS, Validator } from "@angular/forms";
import { Marks } from "../classes/subject";
import {TranslateService} from "@ngx-translate/core";


@Directive({
  selector: "[appValidateDate]",
  providers: [{provide: NG_VALIDATORS, useExisting: ValidateDateDirective, multi: true}]
})
export class ValidateDateDirective implements Validator {
  @Input() public marks: Marks[];

  constructor(private renderer: Renderer2, private el: ElementRef, private translate: TranslateService) {}

  public validate(formItem: any): {} | null {
    if (!formItem.pristine) {
      let message: string;

      this.translate.get("This date is not unique!!!")
        .subscribe(
          (result: string) => {
          message = result;
        });

      if ( this.marks.some( markObj => markObj.date === formItem.value) ) {
        this.renderer.setAttribute(this.el.nativeElement, "title", message);
        return { appValidateDate: true };
      }
      this.renderer.removeAttribute(this.el.nativeElement, "title");
      return null;
    }
  }
}
