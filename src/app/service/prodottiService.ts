import { Injectable } from "@angular/core";
import { Categorie, Prodotto } from "../model/prodotto";
import { Carrello } from "../model/carrello";

@Injectable()
export class ProdottiService {
    
    private magazzino: Prodotto[] = [
        new Prodotto("Vita tra i funghi", Categorie.Fantasy, 31, ["fantasy1.png"], "Un libro di "),
        new Prodotto("Musica dall'alto", Categorie.Fantasy, 24, ["fantasy2.png"], "Un libro di "),
        new Prodotto("La biblioteca", Categorie.Giallo, 11, ["giallo1.png"], "Un libro di "),
        new Prodotto("Dov'è Ambda", Categorie.Giallo, 22, ["giallo2.png"], "Un libro di "),
        new Prodotto("Ecco qui Ambda", Categorie.Giallo, 27, ["giallo3.png"], "Un libro di "),
        new Prodotto("L'amore non voluto", Categorie.Romanzo, 33, ["romanzo1.png"], "Un libro di "),
        new Prodotto("Amore sul treno", Categorie.Romanzo, 20, ["romanzo2.png"], "Un libro di "),
        new Prodotto("Viaggio su Giove", Categorie.Science, 27, ["science1.png"], "Un libro di "),
        new Prodotto("Cosa c'è su Marte", Categorie.Science, 16, ["science2.png"], "Un libro di "),
        new Prodotto("Atlantide nell'universo", Categorie.Science, 14, ["science3.png"], "Un libro di "),
        new Prodotto("L'università di mio padre", Categorie.SelfDevelopment, 32, ["selfdevelopment1.png"], "Un libro di "),
        new Prodotto("Indipendenti dalla natura", Categorie.SelfDevelopment, 19, ["selfdevelopment2.png"], "Un libro di ")
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
}