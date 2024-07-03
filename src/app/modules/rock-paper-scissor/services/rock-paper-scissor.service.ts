import { Injectable } from '@angular/core';
import { ChoiceType } from '../models/enums';

@Injectable({
  providedIn: 'root',
})
export class RockPaperScissorService {
  getComputerChoice(): string {
    const choices = [ChoiceType.ROCK, ChoiceType.PAPER, ChoiceType.SCISSOR];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  }
}
