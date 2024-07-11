import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ExitGameComponent } from 'src/app/components/exit-game/exit-game.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { HangedFormComponent } from './components/hanged-form/hanged-form.component';
import { LettersComponent } from './components/letters/letters.component';
import { RiddleComponent } from './components/riddle/riddle.component';
import { HangedComponent } from './pages/main/hanged.component';

const routes: Routes = [
  {
    path: '',
    component: HangedComponent,
  },
];

@NgModule({
  declarations: [HangedComponent, HangedFormComponent, LettersComponent, RiddleComponent],
  imports: [RouterModule.forChild(routes), CommonModule, TranslateModule, ReactiveFormsModule, ExitGameComponent, SpinnerComponent],
})
export class HangedModule {}
