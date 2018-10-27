import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Client } from "./Client";

@Injectable({
  providedIn: "root"
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  getClientList() {
    return this.http.get("./assets/clients.json");
  }
}
