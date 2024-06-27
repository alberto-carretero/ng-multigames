import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGameList } from 'src/app/models/interfaces';

@Component({
  selector: 'app-games-card',
  templateUrl: './games-card.component.html',
  styleUrls: ['./games-card.component.scss'],
})
export class GamesCardComponent {
  @Input() gamesList: BehaviorSubject<IGameList[]> = new BehaviorSubject([] as IGameList[]);
  @Input() loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
