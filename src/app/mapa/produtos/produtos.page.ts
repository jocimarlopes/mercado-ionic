import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  public items: Array<any>;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    this.items = [
        { nome: 'Arroz', valor: '4,49' },
        { nome: 'Feijão', valor: '5,99' },
        { nome: 'Macarrão Instantâneo', valor: '3,29' },
        { nome: 'Bolachinha Oreo ', valor: '2,89' },
        { nome: 'Bolachinha Trakinas', valor: '3,29' },
    ];
  }
  closeModal()
  {
    this.modalCtrl.dismiss();
  }


}
