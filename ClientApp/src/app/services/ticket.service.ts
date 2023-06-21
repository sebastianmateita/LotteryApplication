import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiPaths } from "../api.paths";
import { TicketModel } from "../models/ticket.model";

@Injectable()
export class TicketService {
  constructor(private http: HttpClient) { }

  drawTicket(model: any): Observable<any> {
    return this.http.post<any>(ApiPaths.drawTicketsURL, model);
  }

  getTicket(id: string): Observable<TicketModel> {
    return this.http.get<TicketModel>(ApiPaths.getTicketsURL + id);
  }

  getAllTickets(): Observable<TicketModel[]> {
    return this.http.get<TicketModel[]>(ApiPaths.getTicketsURL);
  }
}
