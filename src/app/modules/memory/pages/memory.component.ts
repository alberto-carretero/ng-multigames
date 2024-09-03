import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MemoryModeType } from '../models/enums';
import { IMemoryGameState } from '../models/interfaces';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss'],
})
export class MemoryComponent implements OnInit, OnDestroy {
  public displayMenu: boolean = true;
  public gameState: BehaviorSubject<IMemoryGameState> = new BehaviorSubject<IMemoryGameState>({
    isFinished: false,
    isSuccesful: false,
  });

  public selectedMode: MemoryModeType = MemoryModeType.NORMAL;

  private subscriptions = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(
      this.gameState.subscribe((state) => {
        this.gameState.next({ ...this.gameState.getValue(), isFinished: state.isFinished, isSuccesful: state.isSuccesful });
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public selectMode(mode: MemoryModeType) {
    this.selectedMode = mode;
    this.displayMenu = false;
  }

  public showMenu(displayMenu: boolean) {
    this.displayMenu = displayMenu;
  }
}
