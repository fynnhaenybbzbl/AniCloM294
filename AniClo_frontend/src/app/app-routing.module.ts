import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnicloClothingComponent } from './components/aniclo-clothing/aniclo-clothing.component';
import { AnicloDetailComponent } from './components/aniclo-detail/aniclo-detail.component';
import { LoginComponent } from './components/login/login.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { AppRoles } from './app.roles';
import { AppAuthGuard } from './guard/app.auth.guard';
import { EditComponent } from './components/edit/edit.component';
import { AnicloAdminviewComponent } from './components/aniclo-adminview/aniclo-adminview.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlacesComponent } from './components/places/places.component';
import { EditPlaceComponent } from './components/edit-place/edit-place.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'clothings',
    pathMatch: 'full',
    component: AnicloClothingComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Read]
    }
  },
  {
    path: 'clothing/:id',
    pathMatch: 'full',
    component: AnicloDetailComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Read]
    }
  },
  {
    path: 'noaccess',
    component: NoAccessComponent
},
  {
    path: 'edit',
    pathMatch: 'full',
    component: AnicloAdminviewComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Admin],
    }
  },
  {
    path: 'edit/:id',
    pathMatch: 'full',
    component: EditComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Admin],
    }
  },
  {
    path: 'editPlace',
    pathMatch: 'full',
    component: PlacesComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Admin],
    }
  },
  {
    path: 'editPlace/:id',
    pathMatch: 'full',
    component: EditPlaceComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Admin],
    }
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
