import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';
import { catchError, map } from 'rxjs/operators';
import { Employee } from 'src/app/shared/models/employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private currentEmployeeSubject: BehaviorSubject<Employee>
  public currentEmployee: Observable<Employee>
  private employeeApi: string
  constructor(
    private router: Router,
    private http: HttpClient,
    private storage: LocalStorageService,
  ) {
    this.employeeApi = `${environment.apiUrl}api/v1/employees`
    this.currentEmployeeSubject = new BehaviorSubject<Employee>(this.storage.getItem('currentEmployee'))
    this.currentEmployee = this.currentEmployeeSubject.asObservable()
  }
  public get currentEmployeeValue(): Employee {
    return this.currentEmployeeSubject.value // returns the currentUser value to a component
  }

  setCurrentEmployee(employee: Employee) {
    this.currentEmployeeSubject.next(employee) // sets the currentUserSubject
  }

 login(params) {
   return this.http.post<any>(`${this.employeeApi}/login`, params)
   .pipe(
     catchError(this.handleError),
     map(res => {
       if (res && res.token) {
         const newEmployee = new Employee(res)
         this.storage.setItem('accessToken', res.token)
         this.storage.setItem('currentEmployee', newEmployee)
         this.currentEmployeeSubject.next(newEmployee)
         return { success: true, user: newEmployee }
       }
     })
   )
 }

 signup(params) {
   return this.http.post<any>(`${this.employeeApi}/create`, params)
   .pipe(
     catchError(this.handleError),
     map(res => {
       if (res && res.token) {
         const newEmployee = new Employee(res)
         this.storage.setItem('accessToken', res.token)
         this.storage.setItem('currentUser', newEmployee)
         this.currentEmployeeSubject.next(newEmployee)
         return { success: true, employee: newEmployee }
       }
     })
   )
 }

 logoutEmployee() {
   this.logout().subscribe(data => {
     // logout was successful
     if (data) {
       this.removeCurrentCurrentEmployeeAndRoute()
     }
   }, error => {
     if (error) {
       this.removeCurrentCurrentEmployeeAndRoute()
     }
   })
 }

 logout() {
   return this.http.delete<any>( `${this.employeeApi}/logout`, {})
 }

 removeCurrentCurrentEmployeeAndRoute() {
   // set local storage vars as undefined, remove, and then route back to login
   this.storage.setItem('currentEmployee', undefined)
   this.storage.setItem('accessToken', undefined)
   this.currentEmployeeSubject.next(null)
   this.storage.removeItem('currentEmployee')
   this.storage.removeItem('accessToken')
   this.router.navigate(['/login'])
 }

 handleError(error) {
   let returnError
   if(error.error instanceof ErrorEvent) {
     // client-side error
     returnError = { statusCode: error.error.statusCode, message: `Error ${error.error.message}`}
   } else {
     // server-side error
     returnError = { statusCode: error.error.statusCode, message: `Error Code: ${error.status}\nMessage: ${error.message}`}
   }
   return throwError(returnError)
 }
}
