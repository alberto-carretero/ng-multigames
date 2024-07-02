import { Component } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissor',
  templateUrl: './rock-paper-scissor.component.html',
  styleUrls: ['./rock-paper-scissor.component.scss'],
})
export class RockPaperScissorComponent {
  public optionImageUrls: string[] = ['rock', 'paper', 'scissors'];
}
