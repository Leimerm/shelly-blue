import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { ServiceDepartmentComponent } from './service-department/service-department.component';

const routes: Routes = [
  { path:  'service-department', component: ServiceDepartmentComponent, pathMatch: 'full' },
  { path:  'inventory', component: InventoryComponent, pathMatch: 'full' },
  { path:  'customer-login', component: CustomerLoginComponent, pathMatch: 'full' },
  { path:  'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
