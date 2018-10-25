import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientsListComponent } from "./clients-list/clients-list.component";
import { ClientCardComponent } from "./client-card/client-card.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  // { path: "", redirectTo: "/", pathMatch: "full" },
  // { path: "clientList", component: ClientsListComponent },
  // { path: "", component: AppComponent },
  { path: "client/:firstName", component: ClientCardComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
