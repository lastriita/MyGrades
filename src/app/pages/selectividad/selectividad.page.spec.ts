import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectividadPage } from './selectividad.page';

describe('SelectividadPage', () => {
  let component: SelectividadPage;
  let fixture: ComponentFixture<SelectividadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectividadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectividadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
