import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RockPaperScissorService } from './rock-paper-scissor.service';

describe('RockPaperScissorService', () => {
  let service: RockPaperScissorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RockPaperScissorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
