import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DiscoverPageComponent } from "./discover-page/discover-page.component";
import { HomeComponent } from "./pages/home/home.component";
import { TrackingPageComponent } from "./pages/tracking-page/tracking-page.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "track", component: TrackingPageComponent },
  { path: "discover", component: DiscoverPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
