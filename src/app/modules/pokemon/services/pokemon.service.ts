import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPokemon } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokemonNames: string[] = [];

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // Request to web api (https://pokeapi.co/) to get the pokemon
  public getPokemon(pokemonId: number): Observable<IPokemon> {
    return this.http.get<IPokemon>(this.baseUrl + `/${pokemonId}`).pipe(map((response) => response as IPokemon));
  }

  // Request to web api to get the pokemon names
  public getPokemonNames(): Observable<string[]> {
    return this.http.get<string[]>('./assets/games/pokemon/pokemon-names.json');
  }

  public setPokemonNames(pokemonNames: string[]) {
    this.pokemonNames = pokemonNames;
  }

  /**
   *
   * @returns A random number between min (1 (included)) and max (151 (excluded))
   */
  public generateRandomNumber(): number {
    return Math.floor(Math.random() * (151 - 1)) + 1;
  }
}
