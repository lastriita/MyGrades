import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsigDetailPage } from './asig-detail.page';

describe('AsigDetailPage', () => {
  let component: AsigDetailPage;
  let fixture: ComponentFixture<AsigDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsigDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsigDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
