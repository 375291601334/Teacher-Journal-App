import { TestBed, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { StoreModule, Store } from "@ngrx/store";
import { MockTranslatePipe } from "../common/pipes/mock-translate.pipe";
import { TranslateService, TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { reducers, State } from "../redux/reducers/combineReducers";
import { HttpLoaderFactory } from "../app.module";
import { HttpClient, HttpClientModule } from "@angular/common/http";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<State>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
      ],
      declarations: [ AppComponent, MockTranslatePipe ],
      providers: [ Store, TranslateService ],
    }).compileComponents();

    store = TestBed.get(Store);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });

  it("should render title in a h1 tag", () => {
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").innerText).toContain("bookmark Teacher journal");
  });
});
