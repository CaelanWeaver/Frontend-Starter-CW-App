import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  initCart(){

    var cart = window.localStorage.getItem("cart");
    if (cart == null){
      window.localStorage.setItem("cart", "[]");
    }
  }

  addItem(product:Product){
    var cart = window.localStorage.getItem("cart") ?? '';
    var allEntries = JSON.parse(cart) || [];
    allEntries.push(product);
    localStorage.setItem("cart", JSON.stringify(allEntries));
  }

}

// localstorage.names = JSON.stringify(names);
// var storedNames = JSON.parse(localStorage.names);
// var names = [];
// names[0] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));

// //...
// var storedNames = JSON.parse(localStorage.getItem("names"));