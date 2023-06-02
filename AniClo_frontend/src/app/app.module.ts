import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnicloDetailComponent } from './components/aniclo-detail/aniclo-detail.component';
import { AnicloClothingComponent } from './components/aniclo-clothing/aniclo-clothing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { AnicloAdminviewComponent } from './components/aniclo-adminview/aniclo-adminview.component';
import { MatRadioModule } from '@angular/material/radio';
import { LoginComponent } from './components/login/login.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { MatChipsModule } from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';

import { environment } from './environments/environment';
import { AuthConfig, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { AppAuthGuard } from './guard/app.auth.guard';
import { AppAuthService } from './services/app.auth.service';
import { IsInRolesDirective } from './directives/is-in-roles.dir';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { EditComponent } from './components/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlacesComponent } from './components/places/places.component';
import { EditPlaceComponent } from './components/edit-place/edit-place.component';

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8080/realms/ILV',
  requireHttps: false,
  redirectUri: environment.frontendBaseUrl,
  postLogoutRedirectUri: environment.frontendBaseUrl,
  clientId: 'demoapp',
  scope: 'openid profile roles offline_access',
  responseType: 'code',
  showDebugInformation: true,
  requestAccessToken: true,
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  silentRefreshTimeout: 500,
  clearHashAfterLogin: true,
};

export function storageFactory(): OAuthStorage {
  return sessionStorage;
}

@NgModule({
  declarations: [
    AppComponent,
    AnicloClothingComponent,
    AnicloDetailComponent,
    AnicloAdminviewComponent,
    LoginComponent,
    NoAccessComponent,
    IsInRolesDirective,
    EditComponent,
    NotFoundComponent,
    PlacesComponent,
    EditPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatSelectModule,
    MatChipsModule,
    MatRadioModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    }),
    OAuthModule.forRoot({
      resourceServer: {
        sendAccessToken: true
      }
    }),
    ReactiveFormsModule
  ],
  providers: [
  {
    provide: AuthConfig,
    useValue: authConfig
  },
  {
    provide: OAuthStorage,
    useFactory: storageFactory
  },
  AppAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(authService: AppAuthService) {
    authService.initAuth().finally()
  }
}
