import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-memory-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss'],
})
export class MemoryEndGameComponent {
  @Input() isSuccessful: boolean = false;

  public newGame() {
    window.location.reload();
  }
}
