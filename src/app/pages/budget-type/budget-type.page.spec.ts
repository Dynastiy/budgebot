import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BudgetTypePage } from './budget-type.page';

describe('BudgetTypePage', () => {
  let component: BudgetTypePage;
  let fixture: ComponentFixture<BudgetTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
