import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {

  constructor(private http:HttpClient) { }

  storeData(value){
    const body=JSON.stringify(value);
    const headers= new  HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/json'
    });
    return this.http.post('/api/Employees/',body,{headers:headers});
  }
}
