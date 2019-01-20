import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // constructor(private httpclient : HttpClient) {}
  // private cartSubject = new Subject<CartState>();
  // Products : Product[]= [];
  // CartState = this.cartSubject.asObservable();

  // addProduct(_product:any) {
  //   this.Products.push(_product)
  //   this.cartSubject.next(<CartState>{loaded: true, products:    this.Products});
  // }
}
