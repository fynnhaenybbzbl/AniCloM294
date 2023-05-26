import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router){
  }

  clothing = '/clothing'
  disapear = window.location.pathname !== "/clothings"  ;

  checkRoute() {
    this.router.navigate(["/clothings"])
    this.disapear = false;
  }

  log(event: Event){
    event.preventDefault()
    console.log("Hello World")

    this.checkRoute()
  }
}
