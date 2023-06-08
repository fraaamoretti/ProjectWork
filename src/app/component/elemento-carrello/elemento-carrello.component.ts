import { Component } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottiService } from 'src/app/service/prodottiService';

@Component({
  selector: 'app-elemento-carrello',
  templateUrl: './elemento-carrello.component.html',
  styleUrls: ['./elemento-carrello.component.css']
})
export class ElementoCarrelloComponent {
  prodotto? : Prodotto;
  constructor(private prodottiService: ProdottiService){}
}
