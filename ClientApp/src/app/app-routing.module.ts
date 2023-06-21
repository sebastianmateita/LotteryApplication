import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawTicketsComponent } from './components/draw-tickets/draw-tickets.component';
import { HomeComponent } from './components/home/home.component';
import { TicketHistoryComponent } from './components/ticket-history/ticket-history.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'draw-tickets', component: DrawTicketsComponent },
  { path: 'ticket-history', component: TicketHistoryComponent },
  { path: 'ticket-history/:id', component: TicketHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
