import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RockPaperScissorScoreComponent } from './score.component';

describe('RockPaperScissorScoreComponent', () => {
  let component: RockPaperScissorScoreComponent;
  let fixture: ComponentFixture<RockPaperScissorScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RockPaperScissorScoreComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RockPaperScissorScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
