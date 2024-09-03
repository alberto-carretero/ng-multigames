import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss'],
})
export class PokemonEndGameComponent {
  // Score
  @Input() score: number = 0;

  /**
   * Resets the game
   */
  public newGame(): void {
    window.location.reload();
  }
}
