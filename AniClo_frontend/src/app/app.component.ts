import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppAuthService } from './services/app.auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AniClo_frontend';

  constructor(){
  }


}
