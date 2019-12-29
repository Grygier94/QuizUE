import { EndGameComponent } from './end-game/end-game.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule
  ],
  entryComponents: [EndGameComponent],
  declarations: [
    GamePage,
    EndGameComponent
  ]
})
export class GamePageModule { }
