import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IGameList } from 'src/app/models/interfaces';
import { GamesListService } from 'src/app/services/games-list/games-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public gamesList: BehaviorSubject<IGameList[]> = new BehaviorSubject([] as IGameList[]);
  public loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private subscriptions = new Subscription();

  constructor(private gamesListService: GamesListService) {}

  ngOnInit(): void {
    this.getGamesList();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private getGamesList() {
    this.loading.next(true);

    this.subscriptions.add(
      this.gamesListService.getGamesList().subscribe({
        next: (gamesList: IGameList[]) => {
          this.loading.next(false);
          this.gamesList.next(gamesList);
        },
        error: (error: HttpErrorResponse) => {
          this.loading.next(false);
        },
      })
    );
  }
}
