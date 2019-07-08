import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { StudentsTableComponent } from "./students-table.component";
import { MockTranslatePipe } from "src/app/common/pipes/mock-translate.pipe";
import { MatIcon } from "@angular/material";
import { StoreModule, Store } from "@ngrx/store";
import { SortPipe } from "src/app/common/pipes/sort.pipe";
import { reducers, State } from "src/app/redux/reducers/combineReducers";
import { of, Observable } from "rxjs";
import { HttpClientModule } from "@angular/common/http";

describe("StudentsTableComponent", () => {
  let component: StudentsTableComponent;
  let fixture: ComponentFixture<StudentsTableComponent>;
  let store: Store<State>;
  let getDataBySpy: jasmine.Spy;
  let fakeValue: Observable<any> = of(
    [
      {
        id: 0,
        name: {
          first: "Fields",
          last: "Chaney"
        },
        address: "530 Maple Avenue, Lewis, Wyoming, 2493",
        description: "..."
      }
    ]
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StudentsTableComponent,
        MockTranslatePipe,
        MatIcon
      ],
      imports: [ StoreModule.forRoot(reducers), HttpClientModule ],
      providers: [ Store, SortPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    getDataBySpy = spyOn(store, "select").and.returnValue(fakeValue);
    fixture = TestBed.createComponent(StudentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show Fields Chaney in table", async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const values: string[] = ["0", "Fields", "Chaney", "530 MAPLE AVENUE, LEWIS, WYOMING, 2493"];
      const tds: HTMLElement[] = fixture.nativeElement.querySelectorAll("tbody tr td");
      tds.forEach ( (td, index) =>
        expect(td.innerText).toContain(values[index])
      );
      expect(getDataBySpy.calls.any()).toBe(true);
    });
  }));

});
