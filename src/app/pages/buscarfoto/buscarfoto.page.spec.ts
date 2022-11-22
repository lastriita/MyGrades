import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscarfotoPage } from './buscarfoto.page';

describe('BuscarfotoPage', () => {
  let component: BuscarfotoPage;
  let fixture: ComponentFixture<BuscarfotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarfotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarfotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
