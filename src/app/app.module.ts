import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottoComponent } from './component/prodotto/prodotto.component';
import { ProdottiService } from './service/prodottiService';
import { TroncaPipe } from './pipe/tronca.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProdottoComponent,
    TroncaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProdottiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
