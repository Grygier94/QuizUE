import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameMenuPage } from './game-menu.page';

const routes: Routes = [
  {
    path: '',
    component: GameMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameMenuPageRoutingModule {}
