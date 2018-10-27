import { Component, OnInit } from "@angular/core";
import { ClientsService } from "../clients.service";
import { Client } from "../Client";

@Component({
  selector: "app-clients-list",
  templateUrl: "./clients-list.component.html",
  styleUrls: ["./clients-list.component.css"]
})
export class ClientsListComponent implements OnInit {
  clientsList: Client[] = [];
  constructor(private clientsService: ClientsService) {}

  onKeyUp(e) {
    this.clientsService.getClientList().subscribe((clientsList: Client[]) => {
      this.clientsList = clientsList.filter(
        client =>
          client.general.firstName
            .toLowerCase()
            .indexOf(e.target.value.toLowerCase()) !== -1
      );
    });
  }

  ngOnInit() {
    this.clientsService.getClientList().subscribe((clientsList: Client[]) => {
      this.clientsList = clientsList;
    });
  }
}
