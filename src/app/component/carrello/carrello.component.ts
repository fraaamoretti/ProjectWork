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
  
  carrello: Carrello = new Carrello([]);

  constructor(private prodottiService : ProdottiService)
  {
    this.carrello.listaProdotti.push([new Prodotto("I promessi morti", Categorie.Libri, 45, ['promessisposi.jpg'], 'Il romanzo più famoso e più letto tra quelli scritti in lingua italiana'), 1]);
  }

  calcolaTotale() : number
  {
    // this.carrello.listaProdotti.forEach( p => this.carrello.prezzoTotale += (p[1]*p[0].prezzo));//bug da fixare
    // return this.carrello.prezzoTotale;

    for(let i = 0; i < this.carrello.listaProdotti.length; i++)
    {
      this.carrello.prezzoTotale += this.carrello.listaProdotti[i][0].prezzo * this.carrello.listaProdotti[i][1];
    }

    return this.carrello.prezzoTotale;
  }
}
