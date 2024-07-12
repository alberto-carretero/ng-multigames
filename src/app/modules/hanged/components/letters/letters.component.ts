import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HangedPhaseEnum } from '../../models/enums';
import { IHanged, ILetter } from '../../models/interfaces';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss'],
})
export class LettersComponent {
  @Input() hangedData: BehaviorSubject<IHanged> = new BehaviorSubject({} as IHanged);

  public chooseLetter(selectedLetter: string) {
    this.hangedData.next({
      ...this.hangedData.getValue(),
      letters: this.updateLetterState([...this.hangedData.getValue().letters], selectedLetter),
      lastSelection: selectedLetter.toLowerCase(),
      phase: HangedPhaseEnum.INGAME,
    });
  }

  private updateLetterState(letters: ILetter[], selectedLetter: string): ILetter[] {
    letters.forEach((letter) => {
      if (letter.name === selectedLetter) letter.isSelected = true;
    });

    return letters;
  }
}
