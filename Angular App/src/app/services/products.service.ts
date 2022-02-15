import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly rootUrl: string = (environment.rootUrl+'products');

  constructor(private http:HttpClient) { 
   }

   getProducts():Observable<any> {

    return this.http.get(this.rootUrl)

   }

}
