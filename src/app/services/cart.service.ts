import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Product } from '../product';
import { Bill } from '../shared/bill';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient){}
  
  createBill(value:Bill){
    const body=JSON.stringify(value);
    const headers= new  HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/json'
    });
    return this.http.post('/api/Bill/',body,{headers:headers});
  }
}

