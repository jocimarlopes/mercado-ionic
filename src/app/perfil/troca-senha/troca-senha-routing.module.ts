import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrocaSenhaPage } from './troca-senha.page';

const routes: Routes = [
  {
    path: '',
    component: TrocaSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrocaSenhaPageRoutingModule {}
