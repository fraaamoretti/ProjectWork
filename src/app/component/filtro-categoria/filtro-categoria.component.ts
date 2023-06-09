import { Component, EventEmitter, Output } from '@angular/core';
import { ProdottiService } from 'src/app/service/prodottiService';

@Component({
  selector: 'app-filtro-categoria',
  templateUrl: './filtro-categoria.component.html',
  styleUrls: ['./filtro-categoria.component.css']
})
export class FiltroCategoriaComponent {
  categoriaDiRicerca : string = "Tutte le categorie";
  @Output() cercaEvent = new EventEmitter();


  constructor(public prodottiService:ProdottiService){}


  cercaCategoria() : void {
    this.cercaEvent.emit(this.categoriaDiRicerca);
  }
}
