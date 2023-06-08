import { Component, EventEmitter, Output } from "@angular/core"; 

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
    
    pulisci() : void {
      this.stringaDiRicerca = "";
      this.cerca();
    }
}