import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  serviceURL : string;

  constructor(private http: HttpClient) { 
    this.serviceURL = environment.baseUrl;
  }

  getEmployeeList(): Observable<Employee[]> {
  return this.http.get<Employee[]>(this.serviceURL+'/employee/list')
    .pipe(catchError(this.handleError<Employee[]>('getEmployeeList', [])));
}
  handleError<T>(arg0: string, arg1: undefined[]): any {
    throw new Error("Some error occurred while fetching employees.");
  }
  


  createEmployee(employee: Employee){
    return this.http.post(this.serviceURL+'/employee/create', employee);
  }
}
