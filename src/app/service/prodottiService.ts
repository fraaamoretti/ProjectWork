import { Injectable } from "@angular/core";
import { Categorie, Prodotto } from "../model/prodotto";
import { Carrello } from "../model/carrello";
import { RouterTestingHarness } from "@angular/router/testing";

@Injectable()
export class ProdottiService {

    magazzino: Prodotto[] = [
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

    aggiungiAlCarrello(prod: Prodotto): void {
        console.log(this.carrello.listaProdotti.length);
        for (let i = 0; i < this.carrello.listaProdotti.length; i++) {
            if (this.carrello.listaProdotti[i][0] == prod) {
                this.carrello.listaProdotti[i][1]++;
                return;
            }
        }
        this.carrello.listaProdotti.push([prod, 1]); // in caso non ci sia
    }

    rimuoviDalCarrello(prod: Prodotto, rimuovi: boolean): void {
        for (let s = 0; s < this.carrello.listaProdotti.length; s++)
        {
            if (this.carrello.listaProdotti[s][0] == prod)
            {
                if (rimuovi) { // tasto X
                    if (this.carrello.listaProdotti[s][0] == prod) { this.carrello.listaProdotti.splice(s, 1); return; } // rimuovo l'elemento
                }

                // decrementa
                if (this.carrello.listaProdotti[s][1] > 0) this.carrello.listaProdotti[s][1]--; // controllo che non vada in negativo
                if(this.carrello.listaProdotti[s][1] == 0) this.carrello.listaProdotti.splice(s, 1); //se 0 rimuovo
                return;
            }
        }
    }

    getListaProdotti(){
        return this.carrello.listaProdotti;
    }

    getOne(wanted_id: number): Prodotto | undefined{
        return this.magazzino.find(p => p.id == wanted_id);

    }

    find(stringaDiRicerca: string): Prodotto[] {
        return this.magazzino.filter(l => l.titolo.toLowerCase().includes(stringaDiRicerca.toLowerCase()) || l.autore.toLowerCase().includes(stringaDiRicerca.toLowerCase()))
    }

    filtraCateg(categoriaDiRicerca: string): Prodotto[] {
        let ret : Prodotto[] = [];
        if(categoriaDiRicerca == 'Categorie'){
            return this.magazzino;
        }
        for(let p of this.magazzino){
            if(Categorie[p.categoria] == categoriaDiRicerca){
                ret.push(p);
            }
        }

        return ret;

        //return this.magazzino.filter(p => {Categorie[p.categoria] == categoriaDiRicerca})
    }

    getCategorie() : string[] { //solo visivo
        let ar : string[] = [];
        for(let c of Object.keys(Categorie)) {
            if(c.length > 3){  ar.push(c) }
        }
        return ar;
    }

    getProdottoQuantity(prodotto : Prodotto) : number
    {
        let quantity : number = -1;

        this.carrello.listaProdotti.forEach( 
            p => 
            {
                if(p[0] == prodotto)
                {
                    quantity = p[1];
                } else
                {
                    quantity = -1;
                }
            } 
        )

        return quantity;
    }
}