import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Product} from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products: Product[] = [];
  searchText!:string;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(private productsService:ProductsService) { 
   }

  //initialise the cart array in local storage
  //pull 20 products using products service
  ngOnInit(): void {
    this.initCart();
    this.productsService.getProducts()
    .pipe(
      tap(p =>{
        this.products = p.slice(1,21);
      }),
      catchError(err => {
        console.error(err);
        return of(false);
      })
    ).subscribe();
  }

  initCart(){
    var cart = window.localStorage.getItem("cart");
    if (cart == null){
      window.localStorage.setItem("cart", "[]");
    }
  }

  //pulls cart from local storage, parses all entries, then pushes selected product.
  //emitter notifies parent  
  addItem(product:Product){
    var cart = window.localStorage.getItem("cart") ?? '';
    var allEntries = JSON.parse(cart) ?? [];
    allEntries.push(product);
    localStorage.setItem("cart", JSON.stringify(allEntries));
    this.notifyParent.emit();
  }

 

}
