import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppAuthService } from 'src/app/services/app.auth.service';


@Component({
  selector: 'app-aniclo-clothing',
  templateUrl: './aniclo-clothing.component.html',
  styleUrls: ['./aniclo-clothing.component.scss']
})
export class AnicloClothingComponent {

  constructor(private router: Router, private authService : AppAuthService) {

  }

  navigateToClothing() {
    this.router.navigate(["/clothing/:1"])
  }

  navigateToEdit() {
    this.router.navigate(["/edit"])
  }

  public logout () {
    this.authService.logout()
  }

}
