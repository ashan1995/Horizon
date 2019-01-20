import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../product';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  // @Input()product : Product;
  // constructor(private _cartService : CartService) {}
  // AddProduct(_product : Product) {
  //       _product.added = true;
  //       this
  //           ._cartService
  //           .addProduct(_product);
  // }
  ngOnInit() {
  }

}
