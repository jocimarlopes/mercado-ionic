import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrocaSenhaPage } from './troca-senha.page';

describe('TrocaSenhaPage', () => {
  let component: TrocaSenhaPage;
  let fixture: ComponentFixture<TrocaSenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrocaSenhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrocaSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
