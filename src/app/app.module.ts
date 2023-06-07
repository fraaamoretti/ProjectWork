import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottoComponent } from './component/prodotto/prodotto.component';
import { ProdottiService } from './service/prodottiService';
import { CarrelloComponent } from './component/carrello/carrello.component';
import { TroncaPipe } from './pipe/tronca.pipe';
import { BannerComponent } from './component/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdottoComponent,
    CarrelloComponent,
    TroncaPipe,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProdottiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
