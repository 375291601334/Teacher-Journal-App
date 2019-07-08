import { TestBed } from "@angular/core/testing";
import { DataService } from "./data.service";
import { HttpErrorResponse, HttpClientModule } from "@angular/common/http";
import { of } from "rxjs";

describe("DataService", () => {
  let dataService: DataService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach( () => {
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    dataService = new DataService(<any> httpClientSpy);

    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
  });

  it("should be created", () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it("should return expected data(HttpClient called once)", () => {
    const data: number[] = [1, 2, 3];
    httpClientSpy.get.and.returnValue(of(data));

    dataService.getJSONData().subscribe(
      dataFromService => expect(dataFromService).toEqual(data, "expected data"),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, "one call");
  });

  it("should return an error when the server returns a 404", () => {
    const errorResponse: HttpErrorResponse = new HttpErrorResponse({
      error: "test 404 error",
      status: 404,
      statusText: "Not Found"
    });

    httpClientSpy.get.and.returnValue(of(errorResponse));

    dataService.getJSONData().subscribe(
      dataFromService => expect(dataFromService.error).toContain("test 404 error"),
      error  => expect(error.message).toContain("test 404 error")
    );
   });
});
