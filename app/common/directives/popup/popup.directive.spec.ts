import { PopupDirective } from "./popup.directive";
import { ViewContainerRef } from "@angular/core";

describe("PopupDirective", () => {
  let viewContainerRef: ViewContainerRef;

  it("should create an instance", () => {
    const directive = new PopupDirective(viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
