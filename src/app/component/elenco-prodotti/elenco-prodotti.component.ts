import { Component } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottiService } from 'src/app/service/prodottiService';

@Component({
  selector: 'app-elenco-prodotti',
  templateUrl: './elenco-prodotti.component.html',
  styleUrls: ['./elenco-prodotti.component.css']
})
export class ElencoProdottiComponent {

    prodotti : Prodotto[];

    constructor(private prodService : ProdottiService)
    {
        this.prodotti = prodService.listaProdotti;
    }

    cerca(valore: string){
      
    }
}
