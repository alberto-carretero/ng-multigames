import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LettersComponent } from './letters.component';

describe('LettersComponent', () => {
  let component: LettersComponent;
  let fixture: ComponentFixture<LettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LettersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
