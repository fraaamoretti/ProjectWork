import { Component } from '@angular/core';
import { Carrello } from 'src/app/model/carrello';
import { Categorie, Prodotto } from 'src/app/model/prodotto';
import { ProdottiService } from 'src/app/service/prodottiService';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {

  constructor(private prodottiService : ProdottiService)
  {
    this.carrello.listaProdotti.push([new Prodotto("I promessi morti", Categorie.Libri, 45, ['promessisposi.jpg'], 'Il romanzo più famoso e più letto tra quelli scritti in lingua italiana'), 3]);
    this.carrello.listaProdotti.push([new Prodotto("I promessi morti", Categorie.Libri, 4, ['promessisposi.jpg'], 'Il romanzo più famoso e più letto tra quelli scritti in lingua italiana'), 1]);
  }

  carrello: Carrello = this.prodottiService.carrello;

  calcolaTotale() : number
  {
    this.carrello.prezzoTotale = 0;
    this.carrello.listaProdotti.forEach( p => this.carrello.prezzoTotale += (p[1]*p[0].prezzo));//fixato
    return this.carrello.prezzoTotale;
  }

  contaProdotti() : number
  {
    //this.carrello.listaProdotti.length = 0;
    return this.carrello.listaProdotti.length;
  }
}
