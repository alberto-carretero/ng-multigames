import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChoiceType, GameModeType } from '../models/enums';
import { IGameStatus } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class RockPaperScissorService {
  public gameStatus: BehaviorSubject<IGameStatus> = new BehaviorSubject({
    message: 'games.rockPaperScissor.waitingForGame',
    playerOnePoints: 0,
    playerTwoPoints: 0,
    comPoints: 0,
  });

  public currentPlayer: number = 1;
  public playPlayers: string = '';

  public getComputerChoice(): string {
    const choices = [ChoiceType.ROCK, ChoiceType.PAPER, ChoiceType.SCISSOR];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  }

  public game(playUserComp: string, mode: GameModeType): void {
    switch (playUserComp) {
      // User wins
      case `${ChoiceType.ROCK}${ChoiceType.SCISSOR}`:
      case `${ChoiceType.SCISSOR}${ChoiceType.PAPER}`:
      case `${ChoiceType.PAPER}${ChoiceType.ROCK}`:
        this.gameStatus.next({
          ...this.gameStatus.getValue(),
          message: mode === GameModeType.COM ? 'games.win' : 'games.rockPaperScissor.winPlayerOne',
          playerOnePoints: this.gameStatus.getValue().playerOnePoints + 1,
        });
        break;
      // Computer wins
      case `${ChoiceType.SCISSOR}${ChoiceType.ROCK}`:
      case `${ChoiceType.PAPER}${ChoiceType.SCISSOR}`:
      case `${ChoiceType.ROCK}${ChoiceType.PAPER}`:
        this.gameStatus.next({
          ...this.gameStatus.getValue(),
          message: mode === GameModeType.COM ? 'games.lose' : 'games.rockPaperScissor.winPlayerTwo',
          ...(mode === GameModeType.PLAYERS && { playerTwoPoints: this.gameStatus.getValue().playerTwoPoints + 1 }),
          ...(mode === GameModeType.COM && { comPoints: this.gameStatus.getValue().comPoints + 1 }),
        });
        break;
      // Draw
      case `${ChoiceType.SCISSOR}${ChoiceType.SCISSOR}`:
      case `${ChoiceType.PAPER}${ChoiceType.PAPER}`:
      case `${ChoiceType.ROCK}${ChoiceType.ROCK}`:
        this.gameStatus.next({ ...this.gameStatus.getValue(), message: 'games.rockPaperScissor.draw' });
        break;
    }
  }

  public resetGameStatus() {
    this.gameStatus.next({
      message: 'games.rockPaperScissor.waitingForGame',
      playerOnePoints: 0,
      playerTwoPoints: 0,
      comPoints: 0,
    });
  }

  public resetTwoPlayersCurrentValues() {
    this.playPlayers = '';
    this.currentPlayer = 1;
  }
}
