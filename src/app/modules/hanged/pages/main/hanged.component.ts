import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LETTERS } from '../../models/constants';
import { HangedPhaseEnum } from '../../models/enums';
import { IHanged } from '../../models/interfaces';

@Component({
  selector: 'app-hanged',
  templateUrl: './hanged.component.html',
  styleUrls: ['./hanged.component.scss'],
})
export class HangedComponent implements OnInit, OnDestroy {
  public hangedData: BehaviorSubject<IHanged> = new BehaviorSubject({
    riddle: '',
    letters: [],
    lettersRiddle: [],
    attempts: 6,
    lastSelection: '',
    phase: HangedPhaseEnum.INIT,
  } as IHanged);

  public hangedPhase = HangedPhaseEnum;

  private subscriptions = new Subscription();

  ngOnInit(): void {
    this.initializeLetters();

    this.subscriptions.add(
      this.hangedData.subscribe((data: IHanged) => {
        if (data.phase !== HangedPhaseEnum.INIT) {
          this.updateSelection(data.lastSelection);
          this.updateAttempts(data.lastSelection);
          this.updatePhase();
        }
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public play(riddle: string) {
    this.hangedData.next({ ...this.hangedData.getValue(), riddle: riddle });
  }

  private initializeLetters() {
    this.hangedData.next({
      ...this.hangedData.getValue(),
      letters: LETTERS,
    });
  }

  private updateSelection(lastSelection: string) {
    this.hangedData
      .getValue()
      .lettersRiddle.filter((letter) => letter.name === lastSelection)
      .map((foundLetter) => (foundLetter.isSelected = true));
  }

  private updateAttempts(lastSelection: string) {
    const success: boolean | undefined = this.hangedData
      .getValue()
      .lettersRiddle.find((letter) => letter.name === lastSelection)?.isSelected;

    if (!success) this.hangedData.getValue().attempts--;
  }

  private updatePhase() {
    const allSelected: boolean = this.hangedData
      .getValue()
      .lettersRiddle.filter((letterRiddle) => letterRiddle.name !== '')
      .every((letter) => letter.isSelected);

    const attempts: number = this.hangedData.getValue().attempts;

    if (allSelected || attempts === 0) this.hangedData.getValue().phase = HangedPhaseEnum.END;
  }
}
