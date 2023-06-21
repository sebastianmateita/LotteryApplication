import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketModel } from '../../models/ticket.model';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html',
  styleUrls: ['./ticket-history.component.scss']
})
export class TicketHistoryComponent {
  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) { }

  public ticketId: string | undefined;
  public ticket: TicketModel | undefined;

  public allTickets: TicketModel[] | undefined;

  ngOnInit(): void {
    let ticketId = this.route.snapshot.params['id'];

    if (ticketId) {
      this.ticketService.getTicket(ticketId)
        .subscribe(data => {
          this.ticket = data;
          this.ticketId = ticketId;
        })
    } else {
      this.ticketService.getAllTickets()
        .subscribe(data => {
          this.allTickets = data;
        })
    }
  }
}
