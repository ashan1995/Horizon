import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { Item } from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) {}

  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': 'my-auth-token'
  //   })
  // };

  newitem(value){
    const body=JSON.stringify(value);
    const headers= new  HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/json'
    });
    return this.http.post('/api/Items/',body,{headers:headers});
  }
  

  


  updateStock (value){
    const body=JSON.stringify(value);
    const headers= new  HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/json'
    });
    return this.http.put('/api/Items/', body,{headers:headers});
   
  }

}
