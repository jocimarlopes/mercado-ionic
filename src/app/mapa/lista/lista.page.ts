import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public items: Array<any>;

  constructor() { }

  ngOnInit() {
    this.items = [
        { nome: 'Arroz', valor: '4,49' },
        { nome: 'Feijão', valor: '5,99' },
        { nome: 'Macarrão Instantâneo', valor: '3,29' },
        { nome: 'Bolachinha Oreo ', valor: '2,89' },
        { nome: 'Bolachinha Trakinas', valor: '3,29' },
    ];
  }
}
