import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdottiService } from 'src/app/service/prodottiService';
import { CarrelloComponent } from '../carrello/carrello.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
    title = "Shop-lifter";
    slogan = "Ti rubiamo il cuore, non i dati";
    carrello = this.prodottiService.carrello;
    constructor(public prodottiService : ProdottiService, public router : Router) {}

    cercaCategoria(valore: string){
      this.router.navigate(['categoria',valore]);
      //this.prodottiService.find(valore); 
    }

    cerca(valore: string){
      this.router.navigate(['elenco-prodotti',valore]);
      //this.prodottiService.find(valore); 
    }

  
}


