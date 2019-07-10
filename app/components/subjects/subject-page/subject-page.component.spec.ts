import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { SubjectPageComponent } from "./subject-page.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { MatIcon } from "@angular/material";
import { MockTranslatePipe } from "../../../common/pipes/mock-translate.pipe";
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule, Store } from "@ngrx/store";
import { reducers, State } from "src/app/redux/reducers/combineReducers";
import { HttpClientModule } from "@angular/common/http";

describe("SubjectPageComponent", () => {
  let component: SubjectPageComponent;
  let fixture: ComponentFixture<SubjectPageComponent>;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectPageComponent, ButtonComponent, MatIcon,  MockTranslatePipe ],
      imports: [ RouterTestingModule, StoreModule.forRoot(reducers), HttpClientModule ],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(SubjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
