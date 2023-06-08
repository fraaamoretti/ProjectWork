import { Injectable } from "@angular/core";
import { Categorie, Prodotto } from "../model/prodotto";
import { Carrello } from "../model/carrello";
import { RouterTestingHarness } from "@angular/router/testing";

@Injectable()
export class ProdottiService {

    private magazzino: Prodotto[] = [
        new Prodotto(1, "Vita tra i funghi", "SpongeBob Squarepants", Categorie.Fantasy, 31, ["fantasy1.png"], "Un libro di "),
        new Prodotto(2, "Musica dall'alto", "Peter Parker", Categorie.Fantasy, 24, ["fantasy2.png"], "Un libro di "),
        new Prodotto(3, "La biblioteca", "Zio Paperone", Categorie.Giallo, 11, ["giallo1.png"], "Un libro di "),
        new Prodotto(4, "Dov'è Ambda", "Peppa Pig", Categorie.Giallo, 22, ["giallo2.png"], "Un libro di "),
        new Prodotto(5, "Ecco qui Ambda", "Peppa Pig", Categorie.Giallo, 27, ["giallo3.png"], `Il continuo di "Dov'è Ambda" di `),
        new Prodotto(6, "L'amore non voluto", "Dante Manzoni", Categorie.Romanzo, 33, ["romanzo1.png"], "Un libro di "),
        new Prodotto(7, "L'Amore sul treno", "Alessandro Alighieri", Categorie.Romanzo, 20, ["romanzo2.png"], "Un libro di "),
        new Prodotto(8, "Viaggio su Giove", "Mickey     Mouse", Categorie.Science, 27, ["science1.png"], "Un libro di "),
        new Prodotto(9, "Cosa c'è su Marte", "Sherlock Holmes", Categorie.Science, 16, ["science2.png"], "Un libro di "),
        new Prodotto(10, "L'Atlantide nell'universo", "Scooby Doo", Categorie.Science, 14, ["science3.png"], "Un libro di "),
        new Prodotto(11, "L'università di mio padre", "Jerry Mouse", Categorie.SelfDevelopment, 32, ["selfdevelopment1.png"], "Un libro di "),
        new Prodotto(12, "Indipendenti dalla natura", "Winnie the Pooh", Categorie.SelfDevelopment, 19, ["selfdevelopment2.png"], "Un libro di ")
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
        for (let i = 0; i < this.carrello.listaProdotti.length; i++) {
            if (this.carrello.listaProdotti[i][0] == prod) {
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
    getAll() {
        return this.carrello.listaProdotti;
    }
    getOne(wanted_id: number): Prodotto | undefined{
        return this.magazzino.find(p => p.id == wanted_id);

    }
    find(stringaDiRicerca: string): Prodotto[] {
        return this.magazzino.filter(l => l.titolo.includes(stringaDiRicerca) || l.autore.includes(stringaDiRicerca))
    }
    getCategorie() : string[] {
        let ar : string[] = [];
        for(let c of Object.keys(Categorie)) {
            if(c.length > 3){  ar.push(c) }
        }
        return ar;
    }
}