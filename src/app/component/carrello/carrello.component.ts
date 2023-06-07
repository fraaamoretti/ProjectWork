import { Component } from '@angular/core';
import { Carrello } from 'src/app/model/carrello';
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

  }

  calcolaTotale() : number
  {
    this.carrello.listaProdotti.forEach( p => this.carrello.prezzo_totale += (p[1]*p[0].prezzo));//bug da fixare
    return this.carrello.prezzo_totale;
  }
}
