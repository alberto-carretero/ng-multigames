import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ExitGameComponent } from 'src/app/components/exit-game/exit-game.component';
import { BoardComponent } from './components/board/board.component';
import { ButtonComponent } from './components/button/button.component';
import { PokemonEndGameComponent } from './components/end-game/end-game.component';
import { LivesComponent } from './components/lives/lives.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PokemonImageComponent } from './components/pokemon-image/pokemon-image.component';
import { PokemonComponent } from './pages/main/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent,
  },
];

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonImageComponent,
    LoadingComponent,
    ButtonComponent,
    BoardComponent,
    LivesComponent,
    PokemonEndGameComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule, TranslateModule, ExitGameComponent],
})
export class PokemonModule {}
