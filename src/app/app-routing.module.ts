import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConnexionComponent } from "./components/connexion/connexion.component";
import { DiscoverPageComponent } from "./pages/discover-page/discover-page.component";
import { HomeComponent } from "./pages/home/home.component";
import { TrackingPageComponent } from "./pages/tracking-page/tracking-page.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "log", component: ConnexionComponent },
  { path: "track", component: TrackingPageComponent },
  { path: "discover", component: DiscoverPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
