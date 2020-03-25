import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./perfil/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./perfil/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'compras',
    loadChildren: () => import('./perfil/compras/compras.module').then( m => m.ComprasPageModule)
  },
  {
    path: 'troca-senha',
    loadChildren: () => import('./perfil/troca-senha/troca-senha.module').then( m => m.TrocaSenhaPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./mapa/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./mapa/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'concluido',
    loadChildren: () => import('./mapa/concluido/concluido.module').then( m => m.ConcluidoPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./mapa/produtos/produtos.module').then( m => m.ProdutosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
