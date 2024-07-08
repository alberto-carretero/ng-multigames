import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HangedFormComponent } from './hanged-form.component';

describe('HangedFormComponent', () => {
  let component: HangedFormComponent;
  let fixture: ComponentFixture<HangedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HangedFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HangedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
