import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConnexionComponent } from "./pages/connexion/connexion.component";
import { HomeComponent } from "./pages/home/home.component";
import { TrackingPageComponent } from "./pages/tracking-page/tracking-page.component";
import { PresentationPageComponent } from "./pages/presentation-page/presentation-page.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "log", component: ConnexionComponent },
  { path: "track", component: TrackingPageComponent },
  { path: "presentation", component: PresentationPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
