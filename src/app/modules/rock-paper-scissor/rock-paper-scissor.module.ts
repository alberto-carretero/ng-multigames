import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ExitGameComponent } from 'src/app/components/exit-game/exit-game.component';
import { RockPaperScissorBoardComponent } from './components/board/board.component';
import { LastGameChoicesComponent } from './components/last-game-choices/last-game-choices.component';
import { RockPaperScissorScoreComponent } from './components/score/score.component';
import { RockPaperScissorComponent } from './pages/main/rock-paper-scissor.component';

const routes: Routes = [
  {
    path: '',
    component: RockPaperScissorComponent,
  },
];

@NgModule({
  declarations: [RockPaperScissorComponent, RockPaperScissorBoardComponent, RockPaperScissorScoreComponent, LastGameChoicesComponent],
  imports: [RouterModule.forChild(routes), CommonModule, TranslateModule, ExitGameComponent],
})
export class RockPaperScissorModule {}
