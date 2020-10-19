import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/shared/models/cars';
import { CarService } from './../shared/services/car.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service'


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  cars: Car[] = []
  constructor(
    private carService: CarService,
    private storageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.retrieveAllCars()
  }

  retrieveAllCars() {
    this.carService.getAllCars().subscribe(cars => {
      if (cars) {
        this.cars = cars
      }
    }, error => {
      if (error) {
        console.log(error)
      }
    })
  }
}
