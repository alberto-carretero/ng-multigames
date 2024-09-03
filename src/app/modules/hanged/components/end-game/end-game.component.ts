import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hanged-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss'],
})
export class HangedEndGameComponent {
  @Input() attempts: number = 0;
  @Input() riddle: string = '';

  public newGame() {
    window.location.reload();
  }
}
