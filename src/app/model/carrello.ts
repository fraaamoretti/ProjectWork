import { Prodotto } from "./prodotto";

export class Carrello
{
    listaProdotti : [Prodotto, number][] = [];
    prezzo_totale : number;

    constructor(listaProdotti : [Prodotto, number][])
    {
        this.listaProdotti = listaProdotti;
        this.prezzo_totale = 0;
    }
}