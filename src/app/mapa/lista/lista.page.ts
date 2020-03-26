import { Component, OnInit } from '@angular/core';
import { NavController,AlertController,ModalController } from '@ionic/angular';
import { ProdutosPage } from '../produtos/produtos.page';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public categorias: Array<any>;

  constructor(private modalCtrl:ModalController,private alertCtrl:AlertController) { }

  ngOnInit() {
    this.categorias= [
      {nome: 'Grãos e Massas', cor: 'success', icon: '#'},
      {nome: 'Biscoitos e Doces', cor: 'warning', icon: '#'},
      {nome: 'Banheiro e Higiene', cor: 'primary', icon: '#'},
      {nome: 'Limpeza e Outros', cor: 'tertiary', icon: '#'},
      {nome: 'Grãos e Massas', cor: 'success', icon: '#'},
      {nome: 'Biscoitos e Doces', cor: 'warning', icon: '#'},
      {nome: 'Banheiro e Higiene', cor: 'primary', icon: '#'},
      {nome: 'Limpeza e Outros', cor: 'tertiary', icon: '#'},
    ]
    
  }
  async moveToProdutos()
  {
    const modal = await this.modalCtrl.create({
     component: ProdutosPage
   });

   return await modal.present();
  }

}
