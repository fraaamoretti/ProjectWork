import { Prodotto } from "./prodotto";

export class Carrello
{
    listaProdotti : [Prodotto, number][] = [];
    prezzoTotale : number;

    constructor(listaProdotti : [Prodotto, number][])
    {
        this.listaProdotti = listaProdotti;
        this.prezzoTotale = 0;
    }

    get numeroProdotti() : number 
    {
        let tot = 0;
        this.listaProdotti.forEach(p => tot += p[1]);
        return tot;
    }

    quantitàProdotto(prodotto : Prodotto) : number | void
    {
        this.listaProdotti.find(p => {
            if(p[0] === prodotto) return p[1];
            else return;
        })
    }
}