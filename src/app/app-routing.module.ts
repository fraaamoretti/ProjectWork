import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrelloComponent } from './component/carrello/carrello.component';
import { DettaglioProdottoComponent } from './component/dettaglio-prodotto/dettaglio-prodotto.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AboutComponent } from './component/about/about.component';
import { ElencoProdottiComponent } from './component/elenco-prodotti/elenco-prodotti.component';
import {ConfermaPagamentoComponent} from './component/conferma-pagamento/conferma-pagamento.component';
import { ElencoProdottiCategoriaComponent } from './component/elenco-prodotti-categoria/elenco-prodotti-categoria.component';

const routes: Routes = [
  {path: '', component: ElencoProdottiComponent },
  {path: 'carrello', component: CarrelloComponent },
  {path: 'about', component: AboutComponent },
  {path: 'prodotto/:id', component: DettaglioProdottoComponent }, //parametrico
  {path: 'conferma', component: ConfermaPagamentoComponent},
  {path: 'elenco-prodotti/:stringaDiRicerca', component: ElencoProdottiComponent},
  {path: 'categoria/:categoriaDiRicerca', component: ElencoProdottiCategoriaComponent},
  {path: '**', component: NotFoundComponent} //qualsiasi che non sia quelli sopra
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
