import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissor-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RockPaperScissorScoreComponent {
  @Input() userPoints: number = 0;
  @Input() comPoints: number = 0;
}
