import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/products.model';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  private readonly rootUrl: string = 'http://localhost:3000';
  products!: Product[];

  constructor(private http:HttpClient, private productsService:ProductsService) { 

   }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products:Product[])=>{
    this.products = products.slice(1,10);
    console.log(this.products);
    })
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.rootUrl + '/products');
}

}
