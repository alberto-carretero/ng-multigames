import { Component, EventEmitter, Output } from '@angular/core';
import { MemoryModeType } from '../../models/enums';

@Component({
  selector: 'app-memory-game-mode',
  templateUrl: './game-mode.component.html',
  styleUrls: ['./game-mode.component.scss'],
})
export class GameModeComponent {
  @Output() selectedMode: EventEmitter<MemoryModeType> = new EventEmitter<MemoryModeType>();

  public modeType = MemoryModeType;
  public gameModes: MemoryModeType[] = [MemoryModeType.EASY, MemoryModeType.NORMAL, MemoryModeType.HARD];

  public selectMode(mode: MemoryModeType) {
    this.selectedMode.emit(mode);
  }
}
