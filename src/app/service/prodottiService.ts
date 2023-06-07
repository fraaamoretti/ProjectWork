import { Injectable } from "@angular/core";
import { Categorie, Prodotto } from "../model/prodotto";
import { Carrello } from "../model/carrello";

@Injectable()
export class ProdottiService {
    private magazzino: Prodotto[] = [
        // new Prodotto("La divina commedia", Categorie.Libri, 12, ['divinacommedia.jpg'], 'Commedia sui tre mondi'),
         new Prodotto("I promessi sposi", Categorie.Libri, 14, ['promessisposi.jpg'], 'Il romanzo più famoso e più letto tra quelli scritti in lingua italiana'),
         new Prodotto("I promessi idioti", Categorie.Libri, 13, ['promessisposi.jpg'], 'Il romanzo più famoso e più letto tra quelli scritti in lingua italiana'),
         new Prodotto("I mancati sposi", Categorie.Libri, 20, ['promessisposi.jpg'], 'Il romanzo più famoso e più letto tra quelli scritti in lingua italiana'),
         new Prodotto("I promessi morti", Categorie.Libri, 45, ['promessisposi.jpg'], 'Il romanzo più famoso e più letto tra quelli scritti in lingua italiana'),
         new Prodotto("I 3 promessi sposi", Categorie.Libri, 3, ['promessisposi.jpg'], 'Il romanzo più famoso e più letto tra quelli scritti in lingua italiana'),
         new Prodotto("Volevano sposarsi, ma lui è islamico", Categorie.Libri, 2, ['promessisposi.jpg'], 'Il romanzo più famoso e più letto tra quelli scritti in lingua italiana'),
         new Prodotto("Come comprare una moglie", Categorie.Libri, 8, ['promessisposi.jpg'], 'Il romanzo più famoso e più letto tra quelli scritti in lingua italiana'),
         new Prodotto("Gli sposi promessi", Categorie.Libri, 69, ['promessisposi.jpg'], 'Il romanzo più famoso e più letto tra quelli scritti in lingua italiana'),
         new Prodotto("All' occhio di Dio", Categorie.Libri, 420, ['promessisposi.jpg'], 'Il romanzo più famoso e più letto tra quelli scritti in lingua italiana'),
         new Prodotto("Mi identifico sessualmente come sposa", Categorie.Libri, 33, ['promessisposi.jpg'], 'Il romanzo più famoso e più letto tra quelli scritti in lingua italiana'),
        // new Prodotto("Il buio oltre la siepe", Categorie.Libri, 33, ['il-buio-oltre-la-siepe.jpg'], 'Romanzo di Harper Lee'),
        // new Prodotto("Peluche Doraemon", Categorie.Giocattoli, 30, ['doraemon.jpg'], 'Pelouche doraemon 18cm'),
        // new Prodotto("Monopoly", Categorie.Giocattoli, 28, ['monopoly.jpg'], 'Monopoly classico'),
        // new Prodotto("Majhong", Categorie.Giocattoli, 11, ['majhong.jpg'], 'Tavola da gioco con set di majhong'),
        // new Prodotto("Uno - la sfida", Categorie.Giocattoli, 9, ['uno.jpg'], 'Carte da gioco Uno'),
        // new Prodotto("Action Figure - Zoro", Categorie.Giocattoli, 16, ['zoro.jpg'], 'Onepiece zoro'),
        // new Prodotto("Mouse Logitech Base", Categorie.Mouse, 12, ['mousebase.jpg'], 'Mouse base ufficio'),
        // new Prodotto("Mouse Logitech Avanzato", Categorie.Mouse, 40, ['mouseavanzato.jpg'], 'Mouse Superlight'),
        // new Prodotto("Mouse ESL Razer", Categorie.Mouse, 80, ['mouseeslrazer.jpg'], 'Mouse Razer Edizione Speciale ESL'),
        // new Prodotto("Mouse Mid Cooler Master", Categorie.Mouse, 120, ['mousemidcoolermaster.jpg'], 'Mouse Gaming'),
        // new Prodotto("Mouse PRO Razer", Categorie.Mouse, 420, ['mouseprorazer.jpg'], 'Mouse Pro Razer')

        

        
    ]

    carrello: Carrello = new Carrello([]);

    get listaProdotti() : Prodotto[]{
        return this.magazzino;
    }

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