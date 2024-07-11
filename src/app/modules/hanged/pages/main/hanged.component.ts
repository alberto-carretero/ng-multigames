import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-hanged',
  templateUrl: './hanged.component.html',
  styleUrls: ['./hanged.component.scss'],
})
export class HangedComponent {
  public riddle: BehaviorSubject<string> = new BehaviorSubject('');
  public selectedLetter: BehaviorSubject<string> = new BehaviorSubject('');

  public play(riddle: string) {
    this.riddle.next(riddle);
  }

  public checkSelection(selectedLetter: string) {
    this.selectedLetter.next(selectedLetter.toLowerCase());
  }
}
