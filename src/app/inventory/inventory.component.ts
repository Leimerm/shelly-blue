import { Component, OnInit } from '@angular/core';
import { HttpService } from 'C:/Users/matth/Projects/shelly-blue/src/app/http.service'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  cars: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getCars().subscribe(data => {
      this.cars = data
      console.log(this.cars);
    }
  );
  }

}
