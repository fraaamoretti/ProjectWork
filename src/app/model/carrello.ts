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
}