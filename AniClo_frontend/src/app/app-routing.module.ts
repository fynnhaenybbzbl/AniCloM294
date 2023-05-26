import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnicloClothingComponent } from './components/aniclo-clothing/aniclo-clothing.component';
import { AnicloDetailComponent } from './components/aniclo-detail/aniclo-detail.component';
import { AnicloAdminviewComponent } from './components/aniclo-adminview/aniclo-adminview.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'clothings',
    component: AnicloClothingComponent
  },
  {
    path: 'clothing/:id',
    pathMatch: 'full',
    component: AnicloDetailComponent
  },
  {
    path: 'edit',
    pathMatch: 'full',
    component: AnicloAdminviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
