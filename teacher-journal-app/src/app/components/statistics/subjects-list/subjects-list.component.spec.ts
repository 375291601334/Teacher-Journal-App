import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsListComponent } from './subjects-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { reducer } from 'src/app/redux/reducers/studentReducer';
import { StoreModule } from '@ngrx/store';

describe('SubjectsListComponent', () => {
  let component: SubjectsListComponent;
  let fixture: ComponentFixture<SubjectsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsListComponent ],
      imports: [ RouterTestingModule, StoreModule.forRoot({ "studentsState": reducer }) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
