import { Component, OnInit } from "@angular/core";
import { ClientsListService } from "./clients-list.service";
import { Client } from "../Client";

@Component({
  selector: "app-clients-list",
  templateUrl: "./clients-list.component.html",
  styleUrls: ["./clients-list.component.css"]
})
export class ClientsListComponent implements OnInit {
  clientsList: Client[];
  constructor(private clientsListService: ClientsListService) {}

  ngOnInit() {
    this.clientsListService.getClientList().subscribe((data: Client[]) => {
      this.clientsList = data;
      console.log(this.clientsList);
    });
  }
}
