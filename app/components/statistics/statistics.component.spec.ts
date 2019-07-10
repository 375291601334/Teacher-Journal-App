import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { StatisticsComponent } from "./statistics.component";
import { DropdownComponent } from "../dropdown/dropdown.component";
import { RouterTestingModule } from "@angular/router/testing";
import { Router, ActivatedRoute } from "@angular/router";
import { MockTranslatePipe } from "src/app/common/pipes/mock-translate.pipe";
import { MatIcon } from "@angular/material";
import { StoreModule, Store } from "@ngrx/store";
import { reducers, State } from "src/app/redux/reducers/combineReducers";
import { HttpClientModule } from "@angular/common/http";

describe("StatisticsComponent", () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsComponent, DropdownComponent, MockTranslatePipe, MatIcon ],
      imports: [ HttpClientModule, RouterTestingModule, StoreModule.forRoot(reducers) ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
