import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { RockPaperScissorScoreComponent } from './components/score/score.component';
import { RockPaperScissorComponent } from './pages/rock-paper-scissor/rock-paper-scissor.component';

const routes: Routes = [
  {
    path: '',
    component: RockPaperScissorComponent,
  },
];

@NgModule({
  declarations: [RockPaperScissorComponent, RockPaperScissorScoreComponent],
  imports: [RouterModule.forChild(routes), CommonModule, TranslateModule],
})
export class RockPaperScissorModule {}
