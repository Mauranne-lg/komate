import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { ConnexionComponent } from "./pages/connexion/connexion.component";
import { TrackingPageComponent } from "./pages/tracking-page/tracking-page.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PresentationPageComponent } from './pages/presentation-page/presentation-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,

    HomeComponent,
    ConnexionComponent,
    TrackingPageComponent,
    PresentationPageComponent,
    FaqPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
