import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGameList } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GamesListService {
  constructor(private http: HttpClient) {}

  public getGamesList(): Observable<IGameList[]> {
    return this.http.get<IGameList[]>('./assets/games/games-list.json');
  }
}
