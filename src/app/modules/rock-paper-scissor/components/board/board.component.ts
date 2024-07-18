import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GameModeType } from '../../models/enums';
import { RockPaperScissorService } from '../../services/rock-paper-scissor.service';

@Component({
  selector: 'app-rock-paper-scissor-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RockPaperScissorBoardComponent implements OnInit {
  @Input() optionImageUrls: string[] = [];
  @Input() mode: GameModeType = GameModeType.COM;

  @Output() back: EventEmitter<boolean> = new EventEmitter<boolean>();

  public gameMode = GameModeType;

  public gameInfo: string = '';
  public playerOneChoice: string = '';
  public playerTwoChoice: string = '';
  public comChoice: string = '';

  constructor(
    public rockPaperScissorService: RockPaperScissorService,
    private translateService: TranslateService,
  ) {}

  ngOnInit(): void {
    this.gameInfo =
      this.mode === GameModeType.COM
        ? this.setTranslation('games.rockPaperScissor.chooseOne')
        : this.setTranslation('games.rockPaperScissor.choosePlayer', { number: this.rockPaperScissorService.currentPlayer });
  }

  public play(userChoice: string): void {
    if (this.mode === GameModeType.COM) {
      this.playWithCom(userChoice);
    } else {
      this.playWithOtherPlayer(userChoice);
    }
  }

  public goBack() {
    this.rockPaperScissorService.resetGameStatus();
    this.back.emit(true);
  }

  private playWithCom(userChoice: string) {
    this.playerOneChoice = userChoice;
    this.comChoice = this.rockPaperScissorService.getComputerChoice();
    this.rockPaperScissorService.game(userChoice + this.comChoice, this.mode);
  }

  private async playWithOtherPlayer(userChoice: string): Promise<void> {
    this.rockPaperScissorService.playPlayers += userChoice;

    if (this.rockPaperScissorService.currentPlayer === 1) {
      this.playerOneChoice = userChoice;
      this.rockPaperScissorService.currentPlayer++;
      this.gameInfo = this.setTranslation('games.rockPaperScissor.choosePlayer', {
        number: this.rockPaperScissorService.currentPlayer,
      });
    } else {
      this.playerTwoChoice = userChoice;
      await this.rockPaperScissorService.game(this.rockPaperScissorService.playPlayers, this.mode);
      this.rockPaperScissorService.resetTwoPlayersCurrentValues();
      this.resetGameInfo();
    }
  }

  private resetGameInfo() {
    this.gameInfo = this.setTranslation('games.rockPaperScissor.choosePlayer', { number: 1 });
    setTimeout(() => {
      this.playerOneChoice = '';
      this.playerTwoChoice = '';
    }, 500);
  }

  private setTranslation(text: string, param?: any): string {
    return this.translateService.instant(text, param);
  }
}
