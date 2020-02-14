import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewSubPage } from './view-sub.page';

describe('ViewSubPage', () => {
  let component: ViewSubPage;
  let fixture: ComponentFixture<ViewSubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
