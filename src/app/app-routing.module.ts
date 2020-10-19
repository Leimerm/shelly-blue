import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddCarComponent } from './inventory/add-car/add-car.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SingleCarComponent } from './inventory/single-car/single-car.component';
import { LoginComponent } from './login/login.component';
import { ServiceDepartmentComponent } from './service-department/service-department.component';

const routes: Routes = [
  { path:  'service-department', component: ServiceDepartmentComponent, pathMatch: 'full' },
  { path:  'inventory', component: InventoryComponent, pathMatch: 'full' },
  { path:  'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'cars/:id', component: SingleCarComponent, pathMatch: 'full'},
  { path: 'add-car', component: AddCarComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
