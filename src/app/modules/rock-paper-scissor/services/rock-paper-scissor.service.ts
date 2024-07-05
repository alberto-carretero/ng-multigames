import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChoiceType } from '../models/enums';
import { IGameStatus } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class RockPaperScissorService {
  public gameStatus: BehaviorSubject<IGameStatus> = new BehaviorSubject({
    message: 'games.rockPaperScissor.waitingForGame',
    userPoints: 0,
    comPoints: 0,
  });

  getComputerChoice(): string {
    const choices = [ChoiceType.ROCK, ChoiceType.PAPER, ChoiceType.SCISSOR];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  }

  game(userChoice: string): void {
    const playUserComp = userChoice + this.getComputerChoice();

    switch (playUserComp) {
      // User wins
      case `${ChoiceType.ROCK}${ChoiceType.SCISSOR}`:
      case `${ChoiceType.SCISSOR}${ChoiceType.PAPER}`:
      case `${ChoiceType.PAPER}${ChoiceType.ROCK}`:
        this.gameStatus.next({
          ...this.gameStatus.getValue(),
          message: 'games.rockPaperScissor.win',
          userPoints: this.gameStatus.getValue().userPoints + 1,
        });
        break;
      // Computer wins
      case `${ChoiceType.SCISSOR}${ChoiceType.ROCK}`:
      case `${ChoiceType.PAPER}${ChoiceType.SCISSOR}`:
      case `${ChoiceType.ROCK}${ChoiceType.PAPER}`:
        this.gameStatus.next({
          ...this.gameStatus.getValue(),
          message: 'games.rockPaperScissor.lose',
          comPoints: this.gameStatus.getValue().comPoints + 1,
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
}
