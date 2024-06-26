import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RockPaperScissorComponent } from './pages/rock-paper-scissor/rock-paper-scissor.component';

const routes: Routes = [
  {
    path: '',
    component: RockPaperScissorComponent,
  },
];

@NgModule({
  declarations: [RockPaperScissorComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class RockPaperScissorModule {}
