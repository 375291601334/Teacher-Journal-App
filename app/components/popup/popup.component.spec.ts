import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PopupComponent } from "./popup.component";
import { MockTranslatePipe } from 'src/app/common/pipes/mock-translate.pipe';

describe("PopupComponent", () => {
  let component: PopupComponent;
  let fixture: ComponentFixture<PopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupComponent, MockTranslatePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
