import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LastGameChoicesComponent } from './last-game-choices.component';

describe('LastGameChoicesComponent', () => {
  let component: LastGameChoicesComponent;
  let fixture: ComponentFixture<LastGameChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastGameChoicesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastGameChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
