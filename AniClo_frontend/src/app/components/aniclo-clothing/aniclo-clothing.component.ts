import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aniclo-clothing',
  templateUrl: './aniclo-clothing.component.html',
  styleUrls: ['./aniclo-clothing.component.scss']
})
export class AnicloClothingComponent {

  constructor(private router: Router) {

  }

  navigateToClothing() {
    this.router.navigate(["/clothing/:1"])
  }

  navigateToEdit() {
    this.router.navigate(["/edit"])
  }

}
