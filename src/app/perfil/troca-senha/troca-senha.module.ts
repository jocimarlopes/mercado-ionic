import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrocaSenhaPageRoutingModule } from './troca-senha-routing.module';

import { TrocaSenhaPage } from './troca-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrocaSenhaPageRoutingModule
  ],
  declarations: [TrocaSenhaPage]
})
export class TrocaSenhaPageModule {}
