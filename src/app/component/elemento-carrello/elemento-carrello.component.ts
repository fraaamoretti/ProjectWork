import { Component, Input } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottiService } from 'src/app/service/prodottiService';

@Component({
  selector: 'app-elemento-carrello',
  templateUrl: './elemento-carrello.component.html',
  styleUrls: ['./elemento-carrello.component.css']
})
export class ElementoCarrelloComponent {
  @Input()
  prodotto : Prodotto;


  constructor(p:Prodotto,private prodottiService: ProdottiService){
    this.prodotto = p;
  }
}
