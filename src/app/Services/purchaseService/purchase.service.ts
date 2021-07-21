import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Purchase } from 'src/app/model/purchase.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  baseurl: string = "http://localhost:3000/purchase";

  constructor(private http: HttpClient) { }

  getpurchase():Observable<Purchase[]>{
    return this.http.get<Purchase[]>(this.baseurl);
  }

  getpurchaseById(PurchaseId: number):Observable<Purchase[]> {
    return this.http.get<Purchase[]>(this.baseurl + '/' + PurchaseId);
  }

  createpurchase(purchase: Purchase) {
    return this.http.post(this.baseurl, purchase);
  }

  updatepurchase(purchase: Purchase) {
    return this.http.put(this.baseurl + '/' + purchase.PurchaseId, purchase);
  }

  deletepurchase(PurchaseId: number) {
    return this.http.delete(this.baseurl + '/' + PurchaseId);
  }

  findByTitle(title){
    return this.http.get(this.baseurl + title);
  }

}
