import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../shared/cart-item';

@Component({
  selector: 'app-newbill',
  templateUrl: './newbill.component.html',
  styleUrls: ['./newbill.component.css']
})
export class NewbillComponent implements OnInit {
 cartItems : Array<CartItem> = [];

  name:String;
  constructor() { }

  ngOnInit() {
  }
  onChoose(value:CartItem){
    this.cartItems.push(value);
    console.log(this.cartItems);
  }

  remove(cartitem:CartItem){
    this.cartItems.splice(this.cartItems.findIndex(v=>v.itemId==cartitem.itemId),1);
  }
}
