import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ServiceDepartmentComponent } from './service-department/service-department.component';
import { CarCardComponent } from './inventory/car-card/car-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetEstimateComponent } from 'src/app/home/get-estimate/get-estimate.component';
import { SingleCarComponent } from './inventory/single-car/single-car.component';
import { FormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCarComponent } from './inventory/add-car/add-car.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InventoryComponent,
    ServiceDepartmentComponent,
    CarCardComponent,
    GetEstimateComponent,
    SingleCarComponent,
    AddCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
