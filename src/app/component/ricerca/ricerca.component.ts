import { Component, EventEmitter, Output } from "@angular/core"; 
import { ProdottiService } from "src/app/service/prodottiService";

@Component({
    selector : 'app-ricerca',
    templateUrl : './ricerca.component.html',
    styleUrls : ['./ricerca.component.css']
})
export class RicercaComponent{

    stringaDiRicerca : string = "";
    @Output() cercaEvent = new EventEmitter();

    cerca() : void {
      this.cercaEvent.emit(this.stringaDiRicerca);
    }

    constructor(public prodottiService:ProdottiService){}
}