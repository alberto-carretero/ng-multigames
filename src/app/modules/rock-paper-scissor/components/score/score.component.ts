import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGameStatus } from '../../models/interfaces';

@Component({
  selector: 'app-rock-paper-scissor-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RockPaperScissorScoreComponent {
  @Input() gameStatus: BehaviorSubject<IGameStatus> = new BehaviorSubject({
    message: 'games.rockPaperScissor.waitingForGame',
    userPoints: 0,
    comPoints: 0,
  });
}
