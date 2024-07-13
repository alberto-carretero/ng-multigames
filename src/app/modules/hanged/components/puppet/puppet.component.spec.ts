import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PuppetComponent } from './puppet.component';

describe('PuppetComponent', () => {
  let component: PuppetComponent;
  let fixture: ComponentFixture<PuppetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PuppetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PuppetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
