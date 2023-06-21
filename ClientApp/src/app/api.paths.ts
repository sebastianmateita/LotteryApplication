import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class ApiPaths {
  private static baseUrl = environment.baseAPIUrl;

  private static drawTicketsUrl = '/Tickets/Draw';
  private static getTicketsUrl = '/Tickets/';

  static drawTicketsURL = ApiPaths.baseUrl + ApiPaths.drawTicketsUrl;
  static getTicketsURL = ApiPaths.baseUrl + ApiPaths.getTicketsUrl;
}
