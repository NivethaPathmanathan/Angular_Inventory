import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Sales } from 'src/app/model/sales.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  baseurl: string = "http://localhost:3000/sales";

  constructor(private http: HttpClient) { }

  getsales():Observable<Sales[]>{
    return this.http.get<Sales[]>(this.baseurl);
  }

  getsalesById(SalesId: number):Observable<Sales[]> {
    return this.http.get<Sales[]>(this.baseurl + '/' + SalesId);
  }

  createsales(sales: Sales) {
    return this.http.post(this.baseurl, sales);
  }

  updatesales(sales: Sales) {
    return this.http.put(this.baseurl + '/' + sales.SalesId, sales);
  }

  deletesales(SalesId: number) {
    return this.http.delete(this.baseurl + '/' + SalesId);
  }

  findByTitle(title){
    return this.http.get(this.baseurl + title);
  }

}
