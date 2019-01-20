import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) {}

  newitem(value){
    const body=JSON.stringify(value);
    const headers= new  HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/json'
    });
    return this.http.post('/api/Employees/',body,{headers:headers});
  }
  


  addstock(value) {
    const body=JSON.stringify(value);
    const headers= new  HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/json'
    });
    return this.http.post('/api/Employees/',body,{headers:headers});
  }

}
