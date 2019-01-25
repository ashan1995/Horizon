import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Item } from '../../shared/item';
export interface Category {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  _item:Item;
  
  constructor(private itemService:ItemService) { }

  ngOnInit() {
  }
  categories: Category[] = [
    {value: 'movie', viewValue: 'Movie'},
    {value: 'game', viewValue: 'Game'},
    {value: 'tv-show', viewValue: 'TV-Show'}
  ];

  onSubmit(item:Item){
    this._item=new Item(item.name,item.unitPrice,item.category,0);
    // console.log(this._item);
    this.itemService.newitem(this._item).subscribe();
  }

}
