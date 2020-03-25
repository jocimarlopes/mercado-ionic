import { Component } from '@angular/core';
import { ListaPage } from '../mapa/lista/lista.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public mercados: Array<any>;

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    this.mercados = [
        { id: '1', mercado: 'Avenida', cidade: 'Osório', img: 'avenida.png', valor: '50,00' },
        { id: '2', mercado: 'Dalpiaz', cidade: 'Osório', img: 'dalpiaz.png', valor: '50,00' },
        { id: '3', mercado: 'Nacional', cidade: 'Osório', img: 'nacional.png', valor: '50,00' },
        { id: '4', mercado: 'Leve Mais', cidade: 'Osório', img: 'levemais.png', valor: '50,00' },
        { id: '5', mercado: 'Dia', cidade: 'Osório', img: 'dia.jpg', valor: '50,00' },
        { id: '6', mercado: 'Exemplo', cidade: 'Osório', img: 'sua-logo-aqui.png', valor: '50,00' },
        { id: '7', mercado: 'Exemplo', cidade: 'Osório', img: 'sua-logo-aqui.png', valor: '50,00' },
        { id: '8', mercado: 'Exemplo', cidade: 'Osório', img: 'sua-logo-aqui.png', valor: '50,00' },
        { id: '9', mercado: 'Exemplo', cidade: 'Osório', img: 'sua-logo-aqui.png', valor: '50,00' },
        { id: '10', mercado: 'Exemplo', cidade: 'Osório', img: 'sua-logo-aqui.png', valor: '50,00' },
        { id: '11', mercado: 'Exemplo', cidade: 'Osório', img: 'sua-logo-aqui.png', valor: '50,00' },
    ];
  }
}