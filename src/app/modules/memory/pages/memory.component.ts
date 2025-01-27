import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MemoryModeType } from '../models/enums';
import { IMemoryGameState } from '../models/interfaces';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss'],
})
export class MemoryComponent {
  public displayMenu: boolean = true;
  public gameState: BehaviorSubject<IMemoryGameState> = new BehaviorSubject<IMemoryGameState>({
    isFinished: false,
    isSuccesful: false,
  });

  public selectedMode: MemoryModeType = MemoryModeType.NORMAL;

  public selectMode(mode: MemoryModeType) {
    this.selectedMode = mode;
    this.displayMenu = false;
  }

  public showMenu(displayMenu: boolean) {
    this.displayMenu = displayMenu;
  }
}
