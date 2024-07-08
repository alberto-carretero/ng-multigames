import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hanged-form',
  templateUrl: './hanged-form.component.html',
  styleUrls: ['./hanged-form.component.scss'],
})
export class HangedFormComponent {
  @Output() start: EventEmitter<string> = new EventEmitter<string>();

  public hangedForm: FormGroup = new FormGroup({
    riddle: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
  });

  public startGame() {
    this.start.emit(this.hangedForm.controls['riddle'].value);
  }
}
