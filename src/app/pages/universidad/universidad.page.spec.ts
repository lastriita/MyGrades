import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UniversidadPage } from './universidad.page';

describe('UniversidadPage', () => {
  let component: UniversidadPage;
  let fixture: ComponentFixture<UniversidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UniversidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
