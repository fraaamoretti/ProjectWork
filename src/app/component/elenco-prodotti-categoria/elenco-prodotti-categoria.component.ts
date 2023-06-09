import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottiService } from 'src/app/service/prodottiService';

@Component({
  selector: 'app-elenco-prodotti-categoria',
  templateUrl: './elenco-prodotti-categoria.component.html',
  styleUrls: ['./elenco-prodotti-categoria.component.css']
})
export class ElencoProdottiCategoriaComponent {

  prodotti : Prodotto[] = [];

  constructor(private prodService : ProdottiService, public router : Router, public activatedRoute : ActivatedRoute){
    activatedRoute.params.subscribe( p => {
        if(p['categoriaDiRicerca'] == undefined){
          this.prodotti = this.prodService.magazzino;
        }else{
          this.prodotti = this.prodService.filtraCateg(p['categoriaDiRicerca']);
        }
      })
  }


}
