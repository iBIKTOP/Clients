import { Component, OnInit } from "@angular/core";
import { Client } from "../Client";
import { ActivatedRoute } from "@angular/router";
import { ClientsService } from "../clients.service";

@Component({
  selector: "app-client-card",
  templateUrl: "./client-card.component.html",
  styleUrls: ["./client-card.component.css"]
})
export class ClientCardComponent implements OnInit {
  client: Client[];
  constructor(
    private clientsService: ClientsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(({ firstName }) => {
      this.clientsService.getClientList().subscribe((clientsList: Client[]) => {
        this.client = clientsList.filter(
          client => client.general.firstName == firstName
        );
      });
    });
  }
}
