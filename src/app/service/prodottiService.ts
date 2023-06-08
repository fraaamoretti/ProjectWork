import { Injectable } from "@angular/core";
import { Categorie, Prodotto } from "../model/prodotto";
import { Carrello } from "../model/carrello";

@Injectable()
export class ProdottiService {
    
    private magazzino: Prodotto[] = [
        new Prodotto ('aaa', 'aaa', Categorie.Libri, 12, [''], 'aaa')
    ]

    carrello: Carrello = new Carrello([]);

    get listaProdotti(): Prodotto[] {
        return this.magazzino;
    }

    aggiungiAlCarrello(prod: Prodotto): void {/*
        for (let s = 0; s < this.carrello.listaProdotti.length; s++) {
            if (this.carrello.listaProdotti[s][0] == prod)
            {
                this.carrello.listaProdotti[s][1]++;
                this.carrello.listaProdotti.forEach(p => console.log(p[1]));
                return; 
            }
        }
        this.carrello.listaProdotti.push([prod, 1]); // in caso non ci sia
        this.carrello.listaProdotti.forEach(p => console.log(p[1]));*/
        console.log(this.carrello.listaProdotti.length);
        for(let i = 0; i < this.carrello.listaProdotti.length;i++)
        {
            if (this.carrello.listaProdotti[i][0] == prod)
            {
                this.carrello.listaProdotti[i][1]++;
                return; 
            }
        }
        this.carrello.listaProdotti.push([prod, 1]); // in caso non ci sia
    }

    rimuoviDalCarrello(prod: Prodotto, azione: boolean): void {
        for (let s = 0; s < this.carrello.listaProdotti.length; s++) {
            if (this.carrello.listaProdotti[s][0] == prod) {
                if (azione) { // tasto X
                    if (this.carrello.listaProdotti[s][0] == prod) { this.carrello.listaProdotti.splice(s, 1); return; } // rimuovo l'elemento
                }
                // decrementa
                if (this.carrello.listaProdotti[s][1] > 0) this.carrello.listaProdotti[s][1]--; // controllo che non vada in negativo
                return;
            }
        }
    }
    getAll()
    {
        return this.carrello.listaProdotti;
    }
    find(stringaDiRicerca: string) : Prodotto[] {
        return this.magazzino.filter(l => l.titolo.includes(stringaDiRicerca) || l.autore.includes(stringaDiRicerca))
    }
}