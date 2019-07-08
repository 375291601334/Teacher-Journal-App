import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { SubjectTableComponent } from "./subject-table.component";
import { FormsModule } from "@angular/forms";
import { MockTranslatePipe } from "src/app/common/pipes/mock-translate.pipe";
import { StoreModule, Store } from "@ngrx/store";
import { reducers, State } from "src/app/redux/reducers/combineReducers";
import { NO_ERRORS_SCHEMA, DebugElement } from "@angular/core";
import { ValidateDateDirective } from "src/app/common/directives/validate-date.directive";
import { ValidateMarkDirective } from "src/app/common/directives/validate-mark.directive";
import { Router, ActivatedRoute } from "@angular/router";
import { of, Observable } from "rxjs";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpLoaderFactory } from "src/app/app.module";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { selectSubjects } from "src/app/redux/selectors/subjects.selectors";
import { selectStudents } from "src/app/redux/selectors/students.selectors";

describe("SubjectTableComponent", () => {
  let component: SubjectTableComponent;
  let fixture: ComponentFixture<SubjectTableComponent>;
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
          "studentsMarks": [null]
        },
        {
          "date": "2019-06-02",
          "studentsMarks": [6]
        },
        {
          "date": "2019-06-03",
          "studentsMarks": [null]
        },
        {
          "date": "2019-06-04",
          "studentsMarks": [7]
        }
      ]
    }
  ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectTableComponent, MockTranslatePipe, ValidateDateDirective, ValidateMarkDirective ],
      imports: [
        FormsModule,
        StoreModule.forRoot(reducers),
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        Store,
        { provide: Router, useClass: class { public navigate: any = jasmine.createSpy("navigate"); } },
        { provide: ActivatedRoute, useValue: { params: of( { id: "Math" } )} }
      ],
    })
    .compileComponents();
  }));

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
    fixture = TestBed.createComponent(SubjectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show Fields Chaney and his marks", async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const values: string[] = ["Fields", "Chaney", "6.5", "", "6", "", "7"];
      const tds: HTMLElement[] = fixture.nativeElement.querySelectorAll("tbody tr td");
      tds.forEach ( (td, index) => {
        if ( index < 3 ) {
          expect(td.textContent).toBe(values[index]);
        } else {
          let input: HTMLInputElement = td.querySelector("input");
          expect(input.value).toBe(values[index]);
        }
        });
      expect(getDataBySpy.calls.any()).toBe(true);
    });
  }));

  it("change input with mark", async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    const input: HTMLInputElement = fixture.nativeElement.querySelectorAll("input")[6];
    expect(input.value).toBe("");

    input.value = "10";
    input.dispatchEvent( new Event("input") );
    fixture.detectChanges();
    expect(input.value).toBe("10");
    });
  }));

  it("pressing save button", 
  );
});
