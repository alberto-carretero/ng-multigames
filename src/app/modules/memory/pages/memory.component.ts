import { Component } from '@angular/core';
import { MemoryModeType } from '../models/enums';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss'],
})
export class MemoryComponent {
  public displayMenu: boolean = true;
  public isFinished: boolean = false;

  public selectedMode: MemoryModeType = MemoryModeType.NORMAL;

  public selectMode(mode: MemoryModeType) {
    this.selectedMode = mode;
    this.displayMenu = false;
  }

  public showMenu(displayMenu: boolean) {
    this.displayMenu = displayMenu;
  }

  public endGame(isFinished: boolean) {
    this.isFinished = isFinished;
  }
}
