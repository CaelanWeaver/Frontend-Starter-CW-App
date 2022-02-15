import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  private cart: Cart[] = []
  constructor() { }

  addToCart(Product:any, price:number){

    

  }

}
