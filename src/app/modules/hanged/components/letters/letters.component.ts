import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ILetter } from '../../models/interfaces';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss'],
})
export class LettersComponent implements OnInit {
  @Output() selectedLetter: EventEmitter<string> = new EventEmitter<string>();

  public letters: ILetter[] = [
    { name: 'A' },
    { name: 'B' },
    { name: 'C' },
    { name: 'D' },
    { name: 'E' },
    { name: 'F' },
    { name: 'G' },
    { name: 'H' },
    { name: 'I' },
    { name: 'J' },
    { name: 'K' },
    { name: 'L' },
    { name: 'M' },
    { name: 'N' },
    { name: 'Ñ' },
    { name: 'O' },
    { name: 'P' },
    { name: 'Q' },
    { name: 'R' },
    { name: 'S' },
    { name: 'T' },
    { name: 'U' },
    { name: 'V' },
    { name: 'W' },
    { name: 'X' },
    { name: 'Y' },
    { name: 'Z' },
  ];

  ngOnInit(): void {
    this.initializeLetters();
  }

  public chooseLetter(selectedLetter: string) {
    this.letters.find((letter) => letter.name === selectedLetter)!.isSelected = true;
    this.selectedLetter.emit(selectedLetter);
  }

  private initializeLetters() {
    this.letters.forEach((letter) => (letter.isSelected = false));
  }
}
