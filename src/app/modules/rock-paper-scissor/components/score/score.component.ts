import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissor-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RockPaperScissorScoreComponent {}
