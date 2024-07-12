import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { HangedPhaseEnum } from '../../models/enums';
import { IHanged } from '../../models/interfaces';

@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.scss'],
})
export class RiddleComponent implements OnInit, OnDestroy {
  @Input() hangedData: BehaviorSubject<IHanged> = new BehaviorSubject({} as IHanged);

  private subscriptions = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(
      this.hangedData.subscribe((data: IHanged) => {
        if (data.phase === HangedPhaseEnum.INIT) this.setLettersRiddle(data.riddle);
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private setLettersRiddle(riddle: string) {
    riddle.split('').forEach((letter) => {
      this.hangedData.getValue().lettersRiddle = [
        ...this.hangedData.getValue().lettersRiddle,
        { name: !letter.includes(' ') ? letter.toLowerCase() : '' },
      ];
    });
  }
}
