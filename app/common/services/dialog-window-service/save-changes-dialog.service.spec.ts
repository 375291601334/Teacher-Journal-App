import { TestBed } from "@angular/core/testing";

import { SaveChangesDialogService } from "./save-changes-dialog.service";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";

describe("SaveChangesDialogService", () => {
  let service: SaveChangesDialogService;
  let translateSpy: jasmine.SpyObj<TranslateService>;

  beforeEach( () => {
    const spy = jasmine.createSpyObj("TranslateService", ["get"]);

    TestBed.configureTestingModule({
      providers: [
        SaveChangesDialogService,
        { provide: TranslateService, useValue: spy }
      ]
    });

    service = TestBed.get(SaveChangesDialogService);
    translateSpy = TestBed.get(TranslateService);
  }
);

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  // it("#translae.get should return stubbed value from a spy", () => {
  //   const stubValue = of("Do you want to leave without saving? ALL YOUR CHANGES WILL BE CANCELED!!!");
  //   translateSpy.get.and.returnValue(stubValue);

  //   expect(service.confirm());
  //   expect(translateSpy.get.calls.count())
  //     .toBe(1, "spy method was called once");
  //   expect(translateSpy.get.calls.mostRecent().returnValue)
  //     .toBe(stubValue);
  // });

});
