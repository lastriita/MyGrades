import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotasCortePage } from './notas-corte.page';

describe('NotasCortePage', () => {
  let component: NotasCortePage;
  let fixture: ComponentFixture<NotasCortePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasCortePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotasCortePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
