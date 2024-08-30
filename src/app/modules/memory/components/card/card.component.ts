import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  private createdIndex: number[] = [];
  private mode: string = 'NORMAL'; // CREATE ENUM --> EASY / NORMAL / HARD
  private images: string[] = [
    // CREATE CONST FILE
    'assets/images/memory/coconut.png',
    'assets/images/memory/drink.png',
    'assets/images/memory/image-3.png',
    'image-4.png',
    'image-5.png',
    'image-6.png',
    'image-7.png',
    'image-8.png',
    'image-9.png',
    'image-10.png',
    'image-11.png',
    'image-12.png',
    'image-13.png',
    'image-14.png',
    'image-15.png',
    'image-16.png',
    'image-17.png',
    'image-18.png',
    'image-19.png',
    'image-20.png',
    'image-21.png',
    'image-22.png',
    'image-23.png',
    'image-24.png',
    'image-25.png',
    'image-26.png',
    'image-27.png',
    'image-28.png',
    'image-29.png',
    'image-30.png',
    'image-31.png',
    'image-32.png',
  ];
  private counter: number = 0;
  private lastSelectedCard: number = 0;
  private currentSelectedCard: number = 0;

  public cards: any[] = [];

  ngOnInit(): void {
    this.createCards();
  }

  public selectCard(index: number) {
    this.cards[index].selected = !this.cards[index].selected;

    if (this.counter === 0) {
      this.lastSelectedCard = index;
      this.counter++;
    } else {
      this.currentSelectedCard = index;
      this.counter = 0;
      this.lockUnlockUnselectedCards(true);
      this.checkSelection();
    }
  }

  private createCards() {
    const numCards: number = this.getNumCards();

    for (let i = 0; i < numCards / 2; i++) {
      for (let j = 0; j < 2; j++) {
        this.setNextIndexCard(numCards);

        this.cards[this.createdIndex[this.createdIndex.length - 1]] = {
          image: this.images[i],
          selected: false,
          value: this.images[i].split('.')[0],
          locked: false,
        };
      }
    }
  }

  private getNumCards(): number {
    return (
      {
        ['EASY']: 16,
        ['NORMAL']: 32,
        ['HARD']: 64,
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
      this.updateSelectedCardsState(true);
      setTimeout(() => {
        this.lockUnlockUnselectedCards(false);
      }, 1000);
    } else {
      setTimeout(() => {
        this.updateSelectedCardsState(false);
        this.lockUnlockUnselectedCards(false);
      }, 1000);
    }
  }

  private updateSelectedCardsState(state: boolean): void {
    this.cards[this.lastSelectedCard].selected = state;
    this.cards[this.currentSelectedCard].selected = state;
  }
}
