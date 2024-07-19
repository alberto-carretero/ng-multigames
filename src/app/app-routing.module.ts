import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'rockpaperscissor',
    loadChildren: () => import('./modules/rock-paper-scissor/rock-paper-scissor.module').then((m) => m.RockPaperScissorModule),
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./modules/pokemon/pokemon.module').then((m) => m.PokemonModule),
  },
  {
    path: 'hanged',
    loadChildren: () => import('./modules/hanged/hanged.module').then((m) => m.HangedModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
