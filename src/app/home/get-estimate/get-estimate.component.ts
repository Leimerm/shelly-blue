import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-estimate',
  templateUrl: './get-estimate.component.html',
  styleUrls: ['./get-estimate.component.scss'],
  // template: `
  //   <button (click)="onClickMe()">Click me!</button>
  //   {{clickMessage}}`
})

export class GetEstimateComponent implements OnInit, OnChanges{
  currentYear: number = new Date().getFullYear();
  clickMessage = '';
  carvalue:number = null;
  year:number = null;
  milage:number = null;
  make:string = '';
  model:string = '';
  constructor() {
    this.carvalue = null;
    this.year = null;
    this.milage = null;
    this.make = "";
    this.model = "";
  }

  onClickMe() {
    // var worth: [string, number] [];
    // worth = [["Toyota", 20], ["Volkswagen", 19], ["Hyundai", 18], ["General Motors", 17], ["Ford", 16], ["Nissan", 15], ["Honda", 14],
    // ["FCA", 13], ["Renault", 12], ["Groupe PSA", 11], ["Suzuki", 10], ["SAIC", 9], ["Daimler", 8], ["BMW", 7], ["Geely", 6], ["Changan", 5],
    // ["Mazda", 4], ["Dongfeng Motor", 3], ["BAIC", 2], ["Mitsubishi", 1]];
    var carvalue:number = null;
    var calYear = (<HTMLInputElement>document.getElementById("year")).value;
    var calMake = (<HTMLInputElement>document.getElementById("make")).value;
    var calMilage = (<HTMLInputElement>document.getElementById("milage")).value;
    var calModel = (<HTMLInputElement>document.getElementById("model")).value;
    if((this.currentYear - Number(calYear)) > 0) {
      carvalue = 30000 - (this.currentYear - Number(calYear))*525;
    } else {
      carvalue = 30000;
    }
    if(Number(calMilage) > 100000) {
      carvalue = carvalue - (Number(calMilage)*.1);
    } else if (Number(calMilage) > 75000) {
      carvalue = carvalue - (Number(calMilage)*.15);
    } else if (Number(calMilage) > 50000) {
      carvalue = carvalue - (Number(calMilage)*.2);
    } else if (Number(calMilage) > 25000) {
      carvalue = carvalue - (Number(calMilage)*.25);
    }else if (Number(calMilage) > 0) {
      carvalue = carvalue - (Number(calMilage)*.3);
    } if(calMake) {

    } else {

    }
    // (<HTMLInputElement>document.getElementById("carvalue1")).value = String(carvalue);
    (<HTMLElement>document.getElementById('etsPop')).textContent = String(carvalue);
    // console.log(carvalue)
  }

  ngOnChanges() {

  }

  ngOnInit(): void {
  }

}








