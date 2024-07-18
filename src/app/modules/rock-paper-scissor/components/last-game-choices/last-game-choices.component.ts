import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GameModeType } from '../../models/enums';

@Component({
  selector: 'app-rock-paper-scissor-last-game-choices',
  templateUrl: './last-game-choices.component.html',
  styleUrls: ['./last-game-choices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LastGameChoicesComponent {
  @Input() playerOneChoice: string = '';
  @Input() playerTwoChoice: string = '';
  @Input() comChoice: string = '';
  @Input() mode: GameModeType = GameModeType.COM;

  public gameMode = GameModeType;
}
