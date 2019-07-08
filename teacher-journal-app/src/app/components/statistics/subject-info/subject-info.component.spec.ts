import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { SubjectInfoComponent } from "./subject-info.component";
import { StoreModule, Store } from "@ngrx/store";
import { MockTranslatePipe } from "src/app/common/pipes/mock-translate.pipe";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { State, reducers } from "src/app/redux/reducers/combineReducers";
import { HttpClientModule } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { AverageMarksCalculationsService } from "src/app/common/services/average-marks-calculations/average-marks-calculations.service";

describe("SubjectInfoComponent", () => {
  let component: SubjectInfoComponent;
  let fixture: ComponentFixture<SubjectInfoComponent>;
  let router: Router;
  let store: Store<State>;
  let getDataBySpy: jasmine.Spy;
  let fakeSubjectsValue: Observable<any> = of([
    {
      "name": "Math",
      "teacher": "Ms.Vinson",
      "cabiner": 408,
      "description": "Veliis enim et veniam est qui veniam duis consectetur exercitation sunt deserunt esse laborum.",
      "marks": [
        {
          "date": "2019-06-01",
          "studentsMarks": [null, 4, null, 6, null, 10, 8, 9, null, null]
        },
        {
          "date": "2019-06-02",
          "studentsMarks": [ 6, null, null, 9, null, 4, null, 9, 9, null]
        },
        {
          "date": "2019-06-03",
          "studentsMarks": [ null, 7, null, null, 9, 7, null, 9, 7, 7]
        },
        {
          "date": "2019-06-04",
          "studentsMarks": [ 7, 9, null, 6, 5, null, null, 8, null, 7 ]
        }
      ]
    }
  ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectInfoComponent, MockTranslatePipe ],
      imports: [ StoreModule.forRoot(reducers), HttpClientModule ],
      providers: [
        Store,
        AverageMarksCalculationsService,
        { provide: Router, useClass: class { public navigate: any = jasmine.createSpy("navigate"); } },
        { provide: ActivatedRoute, useValue: { params: of( { id: "Math" } )} }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    store = TestBed.get(Store);
    getDataBySpy = spyOn(store, "select").and.returnValue(fakeSubjectsValue);
    fixture = TestBed.createComponent(SubjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
