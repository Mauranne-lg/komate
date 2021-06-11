import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../../shared/user.service";
@Component({
  selector: "app-connexion",
  templateUrl: "./connexion.component.html",
  styleUrls: ["./connexion.component.css"],
})
export class ConnexionComponent implements OnInit {
  // reactive form variables
  signup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  // boolean si l'utilisateur est connecté (service)
  isUserConnected: boolean = this.service.connectUtils.isConnected;
  // boolean si l'utilisateur n'entre pas les bons login
  wrong: boolean;

  constructor(private service: UserService, private router: Router) {}

  // lors de la validation du formulaire
  onSubmit(): void {
    // fonction du service qui connecte le user
    this.service.connectUser(
      this.signup.value["email"],
      this.signup.value["password"]
    );
    // récupérer le boolean si connecté, depuis le service
    this.isUserConnected = this.service.connectUtils.isConnected;
    // récupérer le boolean que la fonction retourne si mdp incorrect
    this.wrong = this.service.connectUser(
      this.signup.value["email"],
      this.signup.value["password"]
    );
    // si le user est connecté -> /profil
    if (this.isUserConnected === true) {
      this.router.navigateByUrl("/profil");
    }
    // si le user a ajouté au panier avant de se connecter -> /cards (panier)
    if (this.service.cartclick) {
      this.router.navigateByUrl("/cards");
    }
  }

  ngOnInit(): void {}
}
