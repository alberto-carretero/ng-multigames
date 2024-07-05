import { Component } from '@angular/core';
import { ChoiceType, GameModeType } from '../../models/enums';
import { RockPaperScissorService } from '../../services/rock-paper-scissor.service';

@Component({
  selector: 'app-rock-paper-scissor',
  templateUrl: './rock-paper-scissor.component.html',
  styleUrls: ['./rock-paper-scissor.component.scss'],
})
export class RockPaperScissorComponent {
  public optionImageUrls: string[] = [ChoiceType.ROCK, ChoiceType.PAPER, ChoiceType.SCISSOR];

  public selectedMode: GameModeType = GameModeType.COM;

  public modeType = GameModeType;

  public displayMenu: boolean = true;

  constructor(public rockPaperScissorService: RockPaperScissorService) {}

  public selectMode(mode: GameModeType) {
    this.selectedMode = mode;
    this.displayMenu = false;
  }

  public showMenu(displayMenu: boolean) {
    this.displayMenu = displayMenu;
  }
}
