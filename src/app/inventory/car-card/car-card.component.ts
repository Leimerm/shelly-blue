import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/shared/models/cars';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit, OnChanges {
  @Input() car: Car
  carImg: string
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.car) {
      this.carImg = this.car.image
    }
  }

  setDefaultPic() {
    this.carImg = 'https://static.fzinternal.com/common/mfg/Toyota/Rav4-Hybrid.png'
  }

  routeToViewCar(id: number) {
    this.router.navigate([`/cars/${id}`])
  }

}
