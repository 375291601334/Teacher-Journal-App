import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StudentInfoComponent } from "./student-info.component";
import { ActivatedRoute, Router } from "@angular/router";
import { Store, StoreModule } from "@ngrx/store";
import { reducers } from "src/app/redux/reducers/combineReducers";
import { MockTranslatePipe } from "src/app/common/pipes/mock-translate.pipe";
import { State } from "src/app/redux/reducers/combineReducers";
import { AverageMarksCalculationsService } from "src/app/common/services/average-marks-calculations/average-marks-calculations.service";
import { of, Observable } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { selectSubjects } from "src/app/redux/selectors/subjects.selectors";
import { selectStudents } from "src/app/redux/selectors/students.selectors";

describe("StudentInfoComponent", () => {
  let component: StudentInfoComponent;
  let fixture: ComponentFixture<StudentInfoComponent>;
  let router: Router;
  let store: Store<State>;
  let getDataBySpy: jasmine.Spy;
  let fakeStudentsValue: Observable<any> = of([
    {
      id: 0,
      name: {
        first: "Fields",
         last: "Chaney"
       },
       address: "530 Maple Avenue, Lewis, Wyoming, 2493",
       description: "Ea consequat ullamco officia com..."
     }
  ]);
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

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ StudentInfoComponent, MockTranslatePipe ],
      imports: [ StoreModule.forRoot(reducers), HttpClientModule ],
      providers: [
        Store,
        AverageMarksCalculationsService,
        { provide: Router, useClass: class { public navigate: any = jasmine.createSpy("navigate"); } },
        { provide: ActivatedRoute, useValue: { params: of( { id: "Chaney_Fields" } )} }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.get(Router);
    store = TestBed.get(Store);
    getDataBySpy = spyOn(store, "select").and.callFake(function(selector: any): any {
      if (selector === selectStudents) {
          return fakeStudentsValue;
      } else if (selector === selectSubjects) {
          return fakeSubjectsValue;
      }
  });
    fixture = TestBed.createComponent(StudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // it("should show Fields Chaney", async(() => {
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     fixture.detectChanges();
  //     let h2: HTMLElement = fixture.nativeElement.querySelectorAll("h2");
  //     expect(h2.innerText).toContain("Student: Fields Chaney");
  //     expect(getDataBySpy.calls.any()).toBe(true);
  //   });
  // }));

});
