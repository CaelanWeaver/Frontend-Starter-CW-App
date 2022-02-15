import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products: Product[] = [];
  searchText:any;

  constructor(private productsService:ProductsService) { 
   }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products:Product[])=>{
    this.products = products.slice(0,20);
    console.log(this.products);
    })
  }

}
