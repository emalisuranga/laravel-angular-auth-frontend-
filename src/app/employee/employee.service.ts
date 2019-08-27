import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeConnection } from './employeeConnection';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url: EmployeeConnection = new EmployeeConnection();

  constructor(
    private http: HttpClient
  ) { }

  loadCompanyAddress(data:any):  Observable<any> {
    return this.http.post(this.url.getCallOnSharesData(), data);
  }
}
