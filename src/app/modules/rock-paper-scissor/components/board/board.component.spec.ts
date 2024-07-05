import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RockPaperScissorBoardComponent } from './board.component';

describe('RockPaperScissorBoardComponent', () => {
  let component: RockPaperScissorBoardComponent;
  let fixture: ComponentFixture<RockPaperScissorBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RockPaperScissorBoardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RockPaperScissorBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
