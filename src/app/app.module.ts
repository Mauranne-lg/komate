import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { ConnexionComponent } from "./components/connexion/connexion.component";
import { TrackingPageComponent } from "./pages/tracking-page/tracking-page.component";
import { DiscoverPageComponent } from "./discover-page/discover-page.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ConnexionComponent,
    TrackingPageComponent,
    DiscoverPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
