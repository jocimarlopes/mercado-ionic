import { Component, OnInit } from '@angular/core';
import { NavController,AlertController,ModalController } from '@ionic/angular';
import { ProdutosPage } from '../produtos/produtos.page';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public items: Array<any>;

  constructor(private modalCtrl:ModalController,private alertCtrl:AlertController) { }

  ngOnInit() {
    
  }
  async moveToProdutos()
  {
    const modal = await this.modalCtrl.create({
     component: ProdutosPage
   });

   return await modal.present();
  }

}
