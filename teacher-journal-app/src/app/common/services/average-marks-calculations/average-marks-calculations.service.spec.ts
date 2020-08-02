import { TestBed } from "@angular/core/testing";

import { AverageMarksCalculationsService } from "./average-marks-calculations.service";

describe("AverageMarksCalculationsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: AverageMarksCalculationsService = TestBed.get(AverageMarksCalculationsService);
    expect(service).toBeTruthy();
  });
});
