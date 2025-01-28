import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EndGameComponent } from './components/end-game/end-game.component';

@NgModule({
  declarations: [EndGameComponent],
  imports: [CommonModule, TranslateModule],
  exports: [EndGameComponent],
})
export class SharedModule {}
