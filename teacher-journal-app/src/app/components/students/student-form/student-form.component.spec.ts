import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormComponent } from './student-form.component';
import { MockTranslatePipe } from 'src/app/common/pipes/mock-translate.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { StoreModule, Store } from '@ngrx/store';
import { reducer } from 'src/app/redux/reducers/studentReducer';
import { reducers, State } from 'src/app/redux/reducers/combineReducers';
import { HttpClientModule } from '@angular/common/http';

describe('StudentFormComponent', () => {
  let component: StudentFormComponent;
  let fixture: ComponentFixture<StudentFormComponent>;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFormComponent, MockTranslatePipe ],
      imports: [ ReactiveFormsModule, StoreModule.forRoot(reducers),  HttpClientModule ],
      providers: [ { provide: Router, useValue: {} } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(StudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
