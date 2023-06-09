import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie, Prodotto } from 'src/app/model/prodotto';
import { ProdottiService } from 'src/app/service/prodottiService';

@Component({
  selector: 'app-dettaglio-prodotto',
  templateUrl: './dettaglio-prodotto.component.html',
  styleUrls: ['./dettaglio-prodotto.component.css']
})
export class DettaglioProdottoComponent {
  id: number = 0;
  prodotto ?: Prodotto;
  nomeCategoria : string;

  constructor(private routeService: ActivatedRoute, public prodottiService: ProdottiService)
  {
<<<<<<< HEAD
    this.id = + this.routeService.snapshot.params['id'];
    if(!isNaN(this.id))
    {
      this.prodotto = this.prodottiService.getOne(this.id);
      this.nomeCategoria = Categorie[(this.prodotto != undefined ? this.prodotto.categoria : 0)];
    } else{
      this.nomeCategoria = "";
    }
    
=======
    this.routeService.params.subscribe( p => {
      this.id = +p ['id'];
      if(!isNaN(this.id)) this.prodotto = this.prodottiService.getOne(this.id);
    })
>>>>>>> ef68a68e6d5a6a81629b9ee1099ff5f57061d246
  }
}
