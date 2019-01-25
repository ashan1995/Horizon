import { Component, OnInit, Input, EventEmitter, Output, Injectable } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../product';
import { ItemService } from '../../../services/item.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Item } from '../../../shared/item';
import { CartItem } from '../../../shared/cart-item';

interface ReceivedItem{
  itemId:number,
  name: string,
  unitPrice: number,
  category:string,
  stock:number
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

@Injectable()
export class ItemListComponent implements OnInit {

  cartItems:CartItem;
  items:ReceivedItem[];
  private error:boolean=false;

  constructor(private http:HttpClient){}
  
  @Output() itemSelected=new EventEmitter<CartItem>();

  ngOnInit() {
    this.http.get('/api/Items/').subscribe(
      (data:ReceivedItem[])=>{
        this.items=data;
        // console.log(data);
      }
    );
      // console.log(this.items);
  }

  onSelected(formValue,itemData:ReceivedItem){
    this.cartItems=new CartItem(itemData.itemId,itemData.name,itemData.unitPrice,formValue.quantity);
    this.itemSelected.emit(this.cartItems);
  }

  
}
