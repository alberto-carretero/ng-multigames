import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IPokemon } from 'src/app/models/interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit, OnDestroy {
  // Pokemon data
  @Input() pokemon: BehaviorSubject<IPokemon> = new BehaviorSubject({} as IPokemon);
  // Loading
  @Input() loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  // Lives
  @Input() lives: number[] = [1, 2, 3];
  // Score
  @Input() score: number = 0;

  // Reports whether the user has been successful
  @Output() isSuccessful = new EventEmitter<number>();
  // Reports whether the game is finished
  @Output() isFinished = new EventEmitter<void>();

  // Options
  public buttonsOptions: string[] = [];

  // Boolean to manage the state of the pokemon image filter property
  public hasBeenSuccessful: boolean = false;

  // Boolean to disable the option buttons when the user hits or misses
  public disableButtons: boolean = false;

  // Subscriptions array
  private subscriptions = new Subscription();

  constructor(private pokemonService: PokemonService) {}

  /**
   * Gets the button options
   */
  ngOnInit(): void {
    this.subscriptions.add(
      this.pokemon.subscribe((pokemon: IPokemon) => {
        if (Object.keys(pokemon).length !== 0) {
          this.reset();
          this.setPokemonButtonsOptions();
        }
      }),
    );
  }

  /**
   * Removes the subscriptions
   */
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * Checks whether the user has been successful or not
   * @param pokemonSelected Pokemon selected
   */
  public checkSelection(pokemonSelected: string): void {
    if (this.pokemon.getValue().name === pokemonSelected) {
      this.disableButtons = true;
      this.hasBeenSuccessful = true;
      this.score++;
      setTimeout(() => {
        this.loading.next(true);
        this.nextPokemon(this.score);
      }, 1000);
    } else {
      this.lives.pop();
      if (this.lives.length === 0) {
        this.endGame();
      }
    }
  }

  /**
   * Creates the button options randomly
   * @param pokemonNames Pokemon button options
   */
  private async setPokemonButtonsOptions(): Promise<void> {
    const pokemonNames: string[] = this.pokemonService.pokemonNames;

    let pokemonIds: number[] = [];
    let currentPokemonId: number = this.pokemon.getValue().id;

    pokemonIds.push(currentPokemonId);

    for (let index = 0; index < 2; index++) {
      currentPokemonId = await this.getRandomNumber();

      if (!pokemonIds.includes(currentPokemonId)) {
        pokemonIds.push(currentPokemonId);
      } else {
        index = index > 0 ? index - 1 : 0;
      }
    }

    pokemonIds = pokemonIds.sort();
    this.setPokemonsNames(pokemonNames, pokemonIds);
  }

  /**
   *
   * @returns A random number between min (1 (included)) and max (151 (excluded))
   */
  private getRandomNumber(): number {
    return this.pokemonService.generateRandomNumber();
  }

  /**
   * Sets pokemon names to the button options array
   * @param pokemonNames Pokemon names
   * @param pokemonIds Pokemon ids (Position in the array)
   */
  private setPokemonsNames(pokemonNames: string[], pokemonIds: number[]): void {
    pokemonIds.map((id) => {
      const name = Object.values(pokemonNames[id - 1])[0];
      this.buttonsOptions.push(name);
    });
  }

  /**
   * Emits each success with its score
   * @param score Score
   */
  private nextPokemon(score: number): void {
    this.isSuccessful.emit(score);
  }

  /**
   * Emits when the game is finished
   */
  private endGame(): void {
    this.isFinished.emit();
  }

  /**
   * Reset initial values
   */
  private reset() {
    this.buttonsOptions = [];
    this.disableButtons = false;
    this.hasBeenSuccessful = false;
  }
}
