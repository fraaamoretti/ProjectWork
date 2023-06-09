import { Component, Input } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottiService } from 'src/app/service/prodottiService';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent {
  @Input()
  prodotto? : Prodotto;
  preferito = false;
  /* service : ProdottiService = new ProdottiService(); */

  constructor(public prodottiService : ProdottiService)
  {

  }

  modificaPreferito()
  {
    if(this.prodotto) this.prodotto.preferito = !this.prodotto.preferito;
  }
}
