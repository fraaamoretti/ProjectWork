import { Injectable } from "@angular/core";
import { Prodotto } from "../model/prodotto";

@Injectable()
export class ProdottiService {
    private libri: Prodotto[] = [
        new Prodotto("La divina commedia", "Libri", 12, ['lalala'], 'libro bello bello'),
        new Prodotto("I promessi sposi", "Libri", 14, ['lalala'], undefined)
    ]
}