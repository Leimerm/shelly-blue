import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getCars() {
    return this.http.get('http://www.carimagery.com/api.asmx')
  }
}
