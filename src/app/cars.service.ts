import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleNumberSymbol } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) {
}

getCars() {
  return this.http.get('https://car-back-end-leimer.herokuapp.com/')
}

}
