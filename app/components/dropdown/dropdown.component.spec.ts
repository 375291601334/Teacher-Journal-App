import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DropdownComponent } from "./dropdown.component";
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MockTranslatePipe } from 'src/app/common/pipes/mock-translate.pipe';
import { MatIcon } from '@angular/material';
import { DropdownService } from 'src/app/common/services/dropdown-service/dropdown.service';
import { reducers, State } from 'src/app/redux/reducers/combineReducers';

describe("DropdownComponent", () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  let store: Store<State>;
  // let store: MockStore< { data: any[], loading: boolean, loaded: boolean } >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownComponent, MockTranslatePipe, MatIcon ],
      providers: [ DropdownService ],
      imports: [ StoreModule.forRoot(reducers) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();
    // store = TestBed.get(Store);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
