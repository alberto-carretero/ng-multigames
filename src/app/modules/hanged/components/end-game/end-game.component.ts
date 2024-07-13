import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss'],
})
export class EndGameComponent {
  @Input() attempts: number = 0;

  public newGame() {
    window.location.reload();
  }
}
