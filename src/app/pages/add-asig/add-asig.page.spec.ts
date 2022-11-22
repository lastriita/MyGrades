import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAsigPage } from './add-asig.page';

describe('AddAsigPage', () => {
  let component: AddAsigPage;
  let fixture: ComponentFixture<AddAsigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAsigPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAsigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
