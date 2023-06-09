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
    this.carrello.listaProdotti = prodottiService.getListaProdotti();
  }
  
  calcolaTotale() : number
  {
    this.carrello.prezzoTotale = 0;
    this.carrello.listaProdotti.forEach( p => this.carrello.prezzoTotale += (p[1]*p[0].prezzo));//fixato
    return this.carrello.prezzoTotale;
  }
  elimina() : void{

    this.prodottiService.carrello.listaProdotti.splice(0);
  }
}
