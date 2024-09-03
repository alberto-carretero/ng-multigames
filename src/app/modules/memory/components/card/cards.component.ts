import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMAGES_URL } from '../../models/constants';
import { MemoryModeType } from '../../models/enums';
import { ICard, IMemoryGameState } from '../../models/interfaces';

@Component({
  selector: 'app-memory-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() mode: MemoryModeType = MemoryModeType.NORMAL;
  @Input() gameState: BehaviorSubject<IMemoryGameState> = new BehaviorSubject<IMemoryGameState>({
    isFinished: false,
    isSuccesful: false,
  });

  public cards: ICard[] = [];

  private createdIndex: number[] = [];
  private numCards: number = 0;
  private selectionsCounter: number = 0;
  private lastSelectedCard: number = 0;
  private currentSelectedCard: number = 0;
  private hits: number = 0;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.createCards();
  }

  public selectCard(index: number) {
    this.cards[index].selected = !this.cards[index].selected;

    if (this.selectionsCounter === 0) {
      this.lastSelectedCard = index;
      this.selectionsCounter++;
    } else {
      this.currentSelectedCard = index;
      this.selectionsCounter = 0;
      this.lockUnlockUnselectedCards(true);
      this.checkSelection();
    }
  }

  private createCards() {
    this.numCards = this.getNumCards();

    for (let i = 0; i < this.numCards / 2; i++) {
      for (let j = 0; j < 2; j++) {
        this.setNextIndexCard(this.numCards);

        this.cards[this.createdIndex[this.createdIndex.length - 1]] = {
          image: IMAGES_URL[i],
          selected: false,
          value: IMAGES_URL[i]?.split('.')[0],
          locked: false,
        };
      }
    }
  }

  private getNumCards(): number {
    return (
      {
        [MemoryModeType.EASY]: 16,
        [MemoryModeType.NORMAL]: 32,
        [MemoryModeType.HARD]: 48,
      }[this.mode] ?? 32
    );
  }

  private setNextIndexCard(maxIndex: number) {
    let newIndex = this.getNextIndexCard(maxIndex);
    let hasBeenCreated = this.createdIndex.includes(newIndex);

    if (hasBeenCreated) this.setNextIndexCard(maxIndex);
    else this.createdIndex.push(newIndex);
  }

  private getNextIndexCard(maxIndex: number): number {
    return Math.floor(Math.random() * maxIndex);
  }

  private lockUnlockUnselectedCards(state: boolean): void {
    this.cards.filter((card) => !card.selected).map((unselectedCard) => (unselectedCard.locked = state));
  }

  private checkSelection(): void {
    if (this.cards[this.lastSelectedCard].value === this.cards[this.currentSelectedCard].value) {
      this.hits++;
      if (this.hits === this.numCards / 2) this.setSuccesfulGame();
      else {
        this.updateSelectedCardsState(true);
        setTimeout(() => {
          this.lockUnlockUnselectedCards(false);
        }, 1000);
      }
    } else {
      setTimeout(() => {
        this.updateSelectedCardsState(false);
        this.lockUnlockUnselectedCards(false);
      }, 1000);
    }
    setTimeout(() => {
      this.changeDetector.detectChanges();
    }, 1000);
  }

  private updateSelectedCardsState(state: boolean): void {
    this.cards[this.lastSelectedCard].selected = state;
    this.cards[this.currentSelectedCard].selected = state;
  }

  private setSuccesfulGame(): void {
    this.gameState.next({ ...this.gameState.getValue(), isFinished: true, isSuccesful: true });
  }
}
