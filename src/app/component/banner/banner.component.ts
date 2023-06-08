import { Component } from '@angular/core';
import { ProdottiService } from 'src/app/service/prodottiService';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
    title = "Shop-lifter";
    slogan = "Ti rubiamo il cuore, non i dati";

    constructor(public prodottiService : ProdottiService) {}
}


