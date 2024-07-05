import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChoiceType } from '../../models/enums';
import { RockPaperScissorService } from '../../services/rock-paper-scissor.service';

@Component({
  selector: 'app-rock-paper-scissor',
  templateUrl: './rock-paper-scissor.component.html',
  styleUrls: ['./rock-paper-scissor.component.scss'],
})
export class RockPaperScissorComponent {
  public optionImageUrls: string[] = [ChoiceType.ROCK, ChoiceType.PAPER, ChoiceType.SCISSOR];

  public loading: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(public rockPaperScissorService: RockPaperScissorService) {}

  play(userChoice: string): void {
    this.rockPaperScissorService.game(userChoice);
  }
}
