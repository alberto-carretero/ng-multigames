import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IGameList } from 'src/app/models/interfaces';
import { GamesListService } from 'src/app/services/games-list/games-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public gamesList: BehaviorSubject<IGameList[]> = new BehaviorSubject([] as IGameList[]);

  private subscription = new Subscription();

  constructor(private gamesListService: GamesListService) {}

  public ngOnInit(): void {
    this.getGamesList();
  }

  private getGamesList() {
    this.subscription.add(
      this.gamesListService.getGamesList().subscribe({
        next: (gamesList: IGameList[]) => {
          console.log(gamesList);
          this.gamesList.next(gamesList);
        },
        error: (error: HttpErrorResponse) => {},
      })
    );
  }
}
