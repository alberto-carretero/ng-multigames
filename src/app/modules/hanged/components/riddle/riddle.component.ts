import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ILetter } from '../../models/interfaces';

@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.scss'],
})
export class RiddleComponent implements OnInit, OnDestroy {
  @Input() riddle: BehaviorSubject<string> = new BehaviorSubject('');
  @Input() selectedLetter: BehaviorSubject<string> = new BehaviorSubject('');

  public lettersRiddle: ILetter[] = [];

  private subscriptions = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(
      this.riddle.subscribe((riddle: string) => {
        riddle.split('').forEach((letter) => {
          this.lettersRiddle = [...this.lettersRiddle, { name: !letter.includes(' ') ? letter.toLowerCase() : '' }];
        });
      }),
    );

    this.subscriptions.add(
      this.selectedLetter.subscribe((selectedLetter: string) => {
        if (selectedLetter)
          this.lettersRiddle.filter((letter) => letter.name === selectedLetter).map((foundLetter) => (foundLetter.isSelected = true));
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
