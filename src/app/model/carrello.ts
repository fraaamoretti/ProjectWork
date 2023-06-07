import { Prodotto } from "./prodotto";

export class Carrello
{
    listaProdotti : [Prodotto, number][] = [];

    constructor(listaProdotti : [Prodotto, number][])
    {
        this.listaProdotti = listaProdotti;
    }
}