import { Component, OnInit, DoCheck } from '@angular/core';
import { CartItem } from '../../shared/cart-item';
import { CartService } from '../../services/cart.service';
import { Bill } from '../../shared/bill';

@Component({
  selector: 'app-newbill',
  templateUrl: './newbill.component.html',
  styleUrls: ['./newbill.component.css']
})
export class NewbillComponent implements OnInit{
 
  cartItems : Array<CartItem> = [];
  itemIds:Array<number>=[];
  amount:number=0;
  name:String;
  bill:Bill;
  constructor(private cartService:CartService) { }


  ngOnInit() {
  }

  

 

  onChoose(value:CartItem){
    this.cartItems.push(value);
    this.itemIds.push(value.itemId);
    // console.log(this.cartItems);
    this.amount+=value.quantity*value.unitPrice;
  }

  remove(cartitem:CartItem){
    this.cartItems.splice(this.cartItems.findIndex(v=>v.itemId==cartitem.itemId),1);
    this.itemIds.splice(this.itemIds.findIndex(v=>v==cartitem.itemId),1);
    this.amount-=cartitem.quantity*cartitem.unitPrice;
  }

  onSubmit(formValue){
    this.bill=new Bill(formValue.customerName,this.amount,this.itemIds);
    this.cartService.createBill(this.bill).subscribe();
    console.log(this.bill);
  }
}
