import { Injectable } from "@angular/core";
import { Categorie, Prodotto } from "../model/prodotto";
import { Carrello } from "../model/carrello";
import { RouterTestingHarness } from "@angular/router/testing";

@Injectable()
export class ProdottiService {

    magazzino: Prodotto[] = [
        new Prodotto(1, "The Shroom Island", "SpongeBob Squarepants", Categorie.Fantasy, 31, ["fantasy1.png"]),
        new Prodotto(2, "Musica dall'alto", "Pietro Parcheggiatore", Categorie.Fantasy, 24, ["fantasy2.png"]),
        new Prodotto(3, "La biblioteca senza libri", "Jerry Mouse", Categorie.Giallo, 11, ["giallo1.png"]),
        new Prodotto(4, "Dov'è Ambda", "Genoveffa e' Maialj", Categorie.Giallo, 22, ["giallo2.png"]),
        new Prodotto(5, "Ecco qui Ambda", "Genoveffa e' Maialj", Categorie.Giallo, 27, ["giallo3.png"], `Il famoso sequel del best seller "Dov'è Ambda", di Genoveffa e' Maialj.`),
        new Prodotto(6, "Love lasts", "Dante Manzoni", Categorie.Romanzo, 33, ["romanzo1.png"]),
        new Prodotto(7, "Incontriamoci sul treno", "Alessandro Alighieri", Categorie.Romanzo, 20, ["romanzo2.png"]),
        new Prodotto(8, "Viaggio su Giove", "Michele o' Topo", Categorie.Science, 27, ["science1.png"]),
        new Prodotto(9, "Mars #44a2, la missione", "Sherlock Holmes", Categorie.Science, 16, ["science2.png"]),
        new Prodotto(10, "L'Atlantide nell'universo", "Scooby Doo", Categorie.Science, 14, ["science3.png"]),
        new Prodotto(11, "Arricchisci la mente", "Zio Paperone", Categorie.SelfDevelopment, 32, ["selfdevelopment1.png"]),
        new Prodotto(12, "Indipendenti dalla natura - una guida alla meditazione", "Marco Aureola", Categorie.SelfDevelopment, 19, ["selfdevelopment2.png"])
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

    tutteLeCategorie = 'Tutte le categorie';
    stPreferiti = 'Preferiti';

    filtraCateg(categoriaDiRicerca: string): Prodotto[] {
        let ret : Prodotto[] = [];
        if(categoriaDiRicerca == this.tutteLeCategorie){
            return this.magazzino;
        } else if (categoriaDiRicerca == this.stPreferiti){
            for(let p of this.magazzino){
                if(p.preferito == true){
                    ret.push(p);
                }
            }
            return ret;
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
        let quantity : number = 0;
        let trovato : boolean = false;

        this.carrello.listaProdotti.forEach( 
            p => 
            {
                if(!trovato){
                    quantity = 0;

                    if(p[0] == prodotto)
                    {
                        quantity = p[1];
                        trovato = true;
                    } else
                    {
                        quantity = -1;
                    }
                }
            } 
        )
        
        return quantity;
    }
}