import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/models/interfaces';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonImageComponent implements OnInit {
  @Input() pokemon: IPokemon = {} as IPokemon;

  // Boolean to manage the state of the pokemon image filter property
  @Input() hasBeenSuccessful: boolean = false;

  // Path of the image to be displayed
  public image: string[] = [];

  /**
   * Gets path of the image to be displayed
   */
  ngOnInit(): void {
    const imageObject = Object.entries(this.pokemon.sprites).find((key, value) => key.includes('other') && value !== undefined);
    this.image = imageObject ? imageObject[1].dream_world.front_default : undefined;
  }
}
