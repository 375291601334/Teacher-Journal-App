import { TestBed, async, inject } from "@angular/core/testing";

import { SubjectExistGuard } from "./subject-exist.guard";
import { StoreModule } from "@ngrx/store";
import { Router } from "@angular/router";
import { reducers } from "src/app/redux/reducers/combineReducers";

describe("SubjectExistGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectExistGuard, { provide: Router, useValue: {} } ],
      imports: [StoreModule.forRoot(reducers)]
    });
  });

  it("should ...", inject([SubjectExistGuard], (guard: SubjectExistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
