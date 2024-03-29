import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
private items: Product[] = [];
  constructor() { }

  public addToCart(product: Product){
    this.items.push(product);
  }
  public getItems():Product[]{
    return this.items;
  }
  public celarCart():Product[]{
    this.items = [];
    return this.items;
  }
}
