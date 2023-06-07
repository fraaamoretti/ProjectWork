import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrelloComponent } from './component/carrello/carrello.component';
import { DettaglioProdottoComponent } from './component/dettaglio-prodotto/dettaglio-prodotto.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  //{path: '', component: ElencoProdottiComponent },
  {path: 'carrello', component: CarrelloComponent }, //parametrico
  {path: 'about', component: AboutComponent },
  {path: 'prodotto/:id', component: DettaglioProdottoComponent }, //parametrico
  {path: '**', component: NotFoundComponent} //qualsiasi che non sia quelli sopra
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
