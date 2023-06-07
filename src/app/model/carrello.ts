import { Prodotto } from "./prodotto";

export class Carrello
{
    listaProdotti : Prodotto[] = [];

    constructor(listaProdotti : Prodotto[])
    {
        this.listaProdotti = listaProdotti;
    }
}