import { Component, Input } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent {
  @Input()
  prodotto? : Prodotto;
  preferito = false;

  modificaPreferito()
  {
    if(this.prodotto) this.prodotto.preferito = !this.prodotto.preferito;
  }

  dettaglioProdotto()
  {
    //TODO
  }
}
