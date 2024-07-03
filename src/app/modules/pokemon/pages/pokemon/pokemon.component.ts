import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IPokemon } from '../../models/interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit, OnDestroy {
  // Pokemon data
  public pokemon: BehaviorSubject<IPokemon> = new BehaviorSubject({} as IPokemon);

  // Lives
  public lives: number[] = [1, 2, 3];

  // Score
  public score: number = 0;

  // Boolean to inform when the game can be initialised
  public loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  // Boolean to inform when the game is finished
  public isFinished: boolean = false;

  // Array of the pokemons shown. Controls that they are not repeated
  private pokemonsShown: number[] = [];

  // Array of subscriptions
  private subscriptions = new Subscription();

  /**
   * Constructor
   * @param pokemonService
   */
  constructor(private pokemonService: PokemonService) {}

  /**
   * Start the game
   * @param pokemonService
   */
  ngOnInit(): void {
    this.getPokemonNames();
  }

  /**
   * Removes the subscriptions
   */
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * End the game. Manage the view to show the end of the game
   */
  public endGame(): void {
    this.isFinished = true;
  }

  /**
   *
   * @param score Score
   */
  public nextPokemon(score: number): void {
    this.score = score;
    this.startGame();
  }

  private getPokemonNames() {
    this.subscriptions.add(
      this.pokemonService.getPokemonNames().subscribe((pokemonsNames: string[]) => {
        this.pokemonService.setPokemonNames(pokemonsNames);
        this.startGame();
      }),
    );
  }

  /**
   * Gets a pokemon from a random number
   */
  private async startGame(): Promise<void> {
    this.loading.next(true);
    const pokemonId = await this.pokemonService.generateRandomNumber();

    if (!this.pokemonsShown.includes(pokemonId)) {
      this.pokemonsShown.push(pokemonId);
      this.subscriptions.add(
        this.pokemonService.getPokemon(pokemonId).subscribe({
          next: (pokemon: IPokemon) => {
            this.loading.next(false);
            this.pokemon.next(pokemon);
          },
          error: (error: HttpErrorResponse) => {
            console.log('🚀 ~ PokemonComponent ~ this.pokemonService.getPokemon ~ error:', error);
          },
        }),
      );
    } else {
      this.startGame();
    }
  }
}
