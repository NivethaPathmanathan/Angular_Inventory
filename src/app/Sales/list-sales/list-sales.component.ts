import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SalesService } from 'src/app/Services/salesService/sales.service';
import { Observable } from "rxjs";
import { Sales } from './../../model/sales.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.css']
})
export class ListSalesComponent implements OnInit {
  public searchText : string;
  p: any;
  private _allSal: Observable<Sales[]>;
  public get allSal(): Observable<Sales[]> {
    return this._allSal;
  }

  public set allSal(value: Observable<Sales[]>) {
    this._allSal = value;
  }
  sales: Sales[] = [];
  constructor(private router: Router,
     private toastr : ToastrService,
     private salesService: SalesService) { }

  loadDisplay(){
   // debugger;
    this.allSal = this.salesService.getsales();
  }

  ngOnInit() {
    this.salesService.getsales().subscribe(data => {
      this.sales = data;
      this.loadDisplay();
    })
  }

  getsales(){
  }

  deletesales(sales: Sales): void {
    this.salesService.deletesales(sales.SalesId)
      .subscribe(data => {
        this.sales = this.sales.filter(u => u !== sales);
        this.toastr.success('Successfully deleted!!');
      })
  };

  editsales(sales: Sales): void {
    localStorage.removeItem("editSalesID");
    localStorage.setItem("editSalesID", sales.SalesId.toString());
    this.router.navigate(['edit-sales']);
  };

  addsales(): void {
    this.router.navigate(['add-sales']);
  };
}

