import { TestBed, async, inject } from "@angular/core/testing";

import { StudentExistGuard } from "./student-exist.guard";
import { StoreModule } from "@ngrx/store";
import { reducer } from "src/app/redux/reducers/studentReducer";
import { Router } from "@angular/router";
import { reducers } from "src/app/redux/reducers/combineReducers";

describe("StudentExistGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentExistGuard, { provide: Router, useValue: {} }],
      imports: [StoreModule.forRoot(reducers)]
    });
  });

  it("should ...", inject([StudentExistGuard], (guard: StudentExistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
