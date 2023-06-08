import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottoComponent } from './component/prodotto/prodotto.component';
import { ProdottiService } from './service/prodottiService';
import { CarrelloComponent } from './component/carrello/carrello.component';
import { TroncaPipe } from './pipe/tronca.pipe';
import { BannerComponent } from './component/banner/banner.component';
import { DettaglioProdottoComponent } from './component/dettaglio-prodotto/dettaglio-prodotto.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AboutComponent } from './component/about/about.component';
import { ElencoProdottiComponent } from './component/elenco-prodotti/elenco-prodotti.component';
import {ConfermaPagamentoComponent} from './component/conferma-pagamento/conferma-pagamento.component';
import { RicercaComponent } from './component/ricerca/ricerca.component';
import { FormsModule } from '@angular/forms';
import { ElementoCarrelloComponent } from './component/elemento-carrello/elemento-carrello.component';
import { FiltroCategoriaComponent } from './component/filtro-categoria/filtro-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdottoComponent,
    CarrelloComponent,
    TroncaPipe,
    BannerComponent,
    DettaglioProdottoComponent,
    NotFoundComponent,
    AboutComponent,
    ElencoProdottiComponent,
    ConfermaPagamentoComponent,
    RicercaComponent,
    ElementoCarrelloComponent,
    FiltroCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProdottiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
