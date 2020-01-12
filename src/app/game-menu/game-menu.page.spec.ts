import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameMenuPage } from './game-menu.page';

describe('GameMenuPage', () => {
  let component: GameMenuPage;
  let fixture: ComponentFixture<GameMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
