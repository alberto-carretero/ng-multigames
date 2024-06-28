import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IPokemon } from 'src/app/models/interfaces';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonImageComponent implements OnInit, OnDestroy {
  @Input() pokemon: BehaviorSubject<IPokemon> = new BehaviorSubject({} as IPokemon);

  // Boolean to manage the state of the pokemon image filter property
  @Input() hasBeenSuccessful: boolean = false;

  // Path of the image to be displayed
  public image: string[] = [];

  private subscriptions = new Subscription();

  /**
   * Gets path of the image to be displayed
   */
  ngOnInit(): void {
    this.subscriptions.add(
      this.pokemon.subscribe((pokemon: IPokemon) => {
        if (Object.keys(pokemon).length !== 0) {
          const imageObject = Object.entries(pokemon.sprites).find((key, value) => key.includes('other') && value !== undefined);
          this.image = imageObject ? imageObject[1].dream_world.front_default : undefined;
        }
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
