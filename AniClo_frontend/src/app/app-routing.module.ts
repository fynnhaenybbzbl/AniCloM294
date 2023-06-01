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
    component: AnicloDetailComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
