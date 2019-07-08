import { ValidateDateDirective } from "./validate-date.directive";
import { Renderer2, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

describe("ValidateDateDirective", () => {
  let renderer: Renderer2;
  let el: ElementRef;
  let translate: TranslateService;

  it("should create an instance", () => {
    const directive = new ValidateDateDirective(renderer, el, translate);
    expect(directive).toBeTruthy();
  });
});
