import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ClientsListService {
  constructor(private http: HttpClient) {}

  getClientList() {
    return this.http.get("./assets/clients.json");
  }
}
