import { Injectable } from "@angular/core";
import { Prodotto } from "../model/prodotto";
import { Carrello } from "../model/carrello";

@Injectable()
export class ProdottiService {
    private magazzino: Prodotto[] = [
        new Prodotto("La divina commedia", "Libri", 12, ['lalala'], 'libro bello bello'),
        new Prodotto("I promessi sposi", "Libri", 14, ['lalala'], undefined)
    ]

    carrello : Carrello = new Carrello([]);

    aggiungiFirstAlCarrello(prod : Prodotto) : void {
        this.carrello.listaProdotti.push([prod, 1]);
    }
    
    aggiungiAlCarrello(prod : Prodotto) : void {
        let t = this.carrello.listaProdotti;
        for(let s = 0; s < t.length; s++){
            if(t[s][0] == prod) { t[s][1]++; break; }
        }
    }

    rimuoviDalCarrello(prod : Prodotto) : void {
        // this.carrello.listaProdotti.findIndex();
    }




}