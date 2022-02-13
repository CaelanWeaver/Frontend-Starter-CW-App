import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/products.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly rootUrl: string = 'http://localhost:3000/products';
  products!: Product[];

  constructor(private http:HttpClient) { 

   }

   getProducts():Observable<any> {

    return this.http.get(this.rootUrl)

   }
}
