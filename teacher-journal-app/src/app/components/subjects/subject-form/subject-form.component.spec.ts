import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SubjectFormComponent } from "./subject-form.component";
import { MockTranslatePipe } from "src/app/common/pipes/mock-translate.pipe";
import { ReactiveFormsModule, NgForm } from "@angular/forms";
import { Store, StoreModule } from "@ngrx/store";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { Router } from "@angular/router";
import { reducers, State } from 'src/app/redux/reducers/combineReducers';
import { HttpClientModule } from '@angular/common/http';

describe("SubjectFormComponent", () => {
  let component: SubjectFormComponent;
  let fixture: ComponentFixture<SubjectFormComponent>;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectFormComponent, MockTranslatePipe ],
      imports: [ ReactiveFormsModule, StoreModule.forRoot(reducers),  HttpClientModule ],
      providers: [ { provide: Router, useValue: {} } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(SubjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
