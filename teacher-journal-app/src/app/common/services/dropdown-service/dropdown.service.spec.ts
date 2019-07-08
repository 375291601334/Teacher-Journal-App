import { TestBed } from "@angular/core/testing";

import { DropdownService } from "./dropdown.service";
import { StoreModule } from "@ngrx/store";
import { reducer } from "src/app/redux/reducers/subjectReducer";
import { reducers } from "src/app/redux/reducers/combineReducers";

describe("DropdownService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [StoreModule.forRoot(reducers)]
  }));

  it("should be created", () => {
    const service: DropdownService = TestBed.get(DropdownService);
    expect(service).toBeTruthy();
  });
});
