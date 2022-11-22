import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRegistroPage } from './add-registro.page';

describe('AddRegistroPage', () => {
  let component: AddRegistroPage;
  let fixture: ComponentFixture<AddRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
