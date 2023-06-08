import { Component } from '@angular/core';
import { Prodotto, Categorie } from 'src/app/model/prodotto';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
    title = "Shop-lifter";
    slogan = "Ti rubiamo il cuore, non i dati";
}


