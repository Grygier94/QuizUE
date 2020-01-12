import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameMenuPageRoutingModule } from './game-menu-routing.module';

import { GameMenuPage } from './game-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameMenuPageRoutingModule
  ],
  declarations: [GameMenuPage]
})
export class GameMenuPageModule {}
