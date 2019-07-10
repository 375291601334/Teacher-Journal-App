import { ValidateMarkDirective } from './validate-mark.directive';
import { Renderer2, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

describe('HighlightDirective', () => {
  let renderer: Renderer2;
  let el: ElementRef;
  let translate: TranslateService;

  it('should create an instance', () => {
    const directive = new ValidateMarkDirective(renderer, el, translate);
    expect(directive).toBeTruthy();
  });
});
