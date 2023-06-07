import { Injectable } from "@angular/core";
import { Categorie, Prodotto } from "../model/prodotto";
import { Carrello } from "../model/carrello";

@Injectable()
export class ProdottiService {
    private magazzino: Prodotto[] = [
        new Prodotto("La divina commedia", Categorie.Libri, 12, ['lalala'], 'libro bello bello'),
        new Prodotto("I promessi sposi", Categorie.Libri, 14, ['lalala'], undefined)
    ]

    carrello: Carrello = new Carrello([]);

    aggiungiAlCarrello(prod: Prodotto): void {
        let t = this.carrello.listaProdotti;
        for (let s = 0; s < t.length; s++) {
            if (t[s][0] == prod) { t[s][1]++; return; }
        }
        t.push([prod, 1]); // in caso non ci sia
    }

    rimuoviDalCarrello(prod: Prodotto, azione: boolean): void {
        let t = this.carrello.listaProdotti;
        for (let s = 0; s < t.length; s++) {
            if (t[s][0] == prod) {
                if (azione) { // tasto X
                    if (t[s][0] == prod) { t.splice(s, 1); return; } // rimuovo l'elemento
                }
                // decrementa
                if (t[s][1] > 0) t[s][1]--; // controllo che non vada in negativo
                return;
            }
        }
    }
}