import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public mercados: Array<any>;

  constructor() {}

  ngOnInit() {
    this.mercados = [
        { mercado: 'Avenida', cidade: 'Osório', img: 'avenida.png', valor: '50,00' },
        { mercado: 'Dalpiaz', cidade: 'Osório', img: 'dalpiaz.png', valor: '50,00' },
        { mercado: 'Nacional', cidade: 'Osório', img: 'nacional.png', valor: '50,00' },
        { mercado: 'Leve Mais', cidade: 'Osório', img: 'levemais.png', valor: '50,00' },
        { mercado: 'Dia', cidade: 'Osório', img: 'dia.jpg', valor: '50,00' },
    ];
  }
}
