import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottiService } from 'src/app/service/prodottiService';

@Component({
  selector: 'app-elenco-prodotti',
  templateUrl: './elenco-prodotti.component.html',
  styleUrls: ['./elenco-prodotti.component.css']
})
export class ElencoProdottiComponent {

    prodotti : Prodotto[] = [];

    constructor(private prodService : ProdottiService, public router : Router, public activatedRoute : ActivatedRoute)
    {
      activatedRoute.params.subscribe( p => {
        if(p['stringaDiRicerca'] == undefined){
          this.prodotti = this.prodService.magazzino;
        }else{
          this.prodotti = this.prodService.find(p['stringaDiRicerca']);
        }
      })

      
        
        


    }

    
}
