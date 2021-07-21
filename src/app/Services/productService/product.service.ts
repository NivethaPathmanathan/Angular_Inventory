import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Product } from 'src/app/model/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl: string = "http://localhost:3000/product";

  constructor(private http: HttpClient) { }

  getproduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseurl);
  }

  getproductById(ProductId: number):Observable<Product[]> {
    return this.http.get<Product[]>(this.baseurl + '/' + ProductId);
  }

  createproduct(product: Product) {
    return this.http.post(this.baseurl, product);
  }

  updateproduct(product: Product) {
    return this.http.put(this.baseurl + '/' + product.ProductId, product);
  }

  deleteproduct(ProductId: number) {
    return this.http.delete(this.baseurl + '/' + ProductId);
  }

  findByTitle(title){
    return this.http.get(this.baseurl + title);
  }

}
