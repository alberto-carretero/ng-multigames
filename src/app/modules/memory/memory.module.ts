import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ExitGameComponent } from 'src/app/components/exit-game/exit-game.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { MemoryBoardComponent } from './components/board/board.component';
import { CardsComponent } from './components/card/cards.component';
import { GameModeComponent } from './components/game-mode/game-mode.component';
import { MemoryComponent } from './pages/memory.component';

const routes: Routes = [
  {
    path: '',
    component: MemoryComponent,
  },
];

@NgModule({
  declarations: [MemoryComponent, MemoryBoardComponent, CardsComponent, GameModeComponent],
  imports: [RouterModule.forChild(routes), CommonModule, TranslateModule, ExitGameComponent, SpinnerComponent],
})
export class HangedModule {}
