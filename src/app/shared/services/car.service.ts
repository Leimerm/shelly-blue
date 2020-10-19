import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Car } from 'src/app/shared/models/cars'

@Injectable({
  providedIn: 'root'
})
export class CarService {
  car: Car
  private carApi: string;
  constructor(
    private http: HttpClient
  ) {
    this.carApi = `${environment.apiUrl}api/v1/cars`
  }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.carApi}/index`)
  }

  getCarById(params) {
    return this.http.get<any>(`${this.carApi}/show?id=${params.id}`)
  }

  // calcPayment() {
  //   var cost = this.car.price
  //   var newCost = cost - (cost*.1 + 500)
  //   cost = newCost - (newCost * .03)
  // }

}
