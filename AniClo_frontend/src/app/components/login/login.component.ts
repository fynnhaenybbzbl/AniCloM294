import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppAuthService } from 'src/app/services/app.auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = ''
  useralias = ''


  constructor(
    private authService : AppAuthService, private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.usernameObservable.subscribe(name => {
      this.username = name;
    });
    this.authService.useraliasObservable.subscribe(alias => {
      this.useralias = alias;
    });
  }

  public login () {
    this.authService.login()
  }

  public logout () {
    this.authService.logout()
  }

  public isAuthenticated () : boolean {
    return this.authService.isAuthenticated()
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
