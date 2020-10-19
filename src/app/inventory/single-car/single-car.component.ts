import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/shared/models/cars';
import { CarService } from 'src/app/shared/services/car.service';
import { Employee } from 'C:/Users/matth/Projects/shelly-blue/src/app/shared/models/employee'
import { EmployeeService } from 'src/app/shared/services/employee.service'

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.scss']
})
export class SingleCarComponent implements OnInit, OnDestroy {
  car: Car
  carImg: string
  currentEmployee: Employee
  private subs = new Subscription
  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private employeeService: EmployeeService
  ) {
    this.currentEmployee =this.employeeService.currentEmployeeValue
  }

  ngOnInit(): void {
    this.route.params.subscribe(car => {
      if (car && car.id) {
        this.retrieveCarById(car.id)
      }
    });
    this.calcPayment()
  }

  retrieveCarById(id: number) {
    const params = { id: id }
    this.subs.add(
      this.carService.getCarById(params).subscribe(data => {
        if (data && data.car) {
          console.log(data)
          this.car = new Car(data.car)
          this.carImg = this.car.image
        }
      }, error => {
        if (error) {
          console.log(error)
        }
      })
    )
  }

  setDefaultPic() {
    this.carImg = 'https://static.fzinternal.com/common/mfg/Toyota/Rav4-Hybrid.png'
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  calcPayment() {
    var cost = this.car.price
    var newCost = cost - (cost*.1 + 500);
    cost = newCost + (newCost * .03);
    (<HTMLElement>document.getElementById('pay')).textContent = String(cost);
  }

}
