import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PurchaseService } from 'src/app/Services/purchaseService/purchase.service';
import { Observable } from "rxjs";
import { Purchase } from './../../model/purchase.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-purchase',
  templateUrl: './list-purchase.component.html',
  styleUrls: ['./list-purchase.component.css']
})
export class ListPurchaseComponent implements OnInit {

  public searchText : string;
  p: any;
  private _allPur: Observable<Purchase[]>;
  public get allPur(): Observable<Purchase[]> {
    return this._allPur;
  }

  public set allPur(value: Observable<Purchase[]>) {
    this._allPur = value;
  }
  purchase: Purchase[] = [];
  constructor(private router: Router,
    private toastr : ToastrService,
     private purchaseService: PurchaseService) {

      }

  loadDisplay(){
    //debugger;
    this.allPur = this.purchaseService.getpurchase();
  }

  ngOnInit() {
    this.purchaseService.getpurchase().subscribe(data => {
      this.purchase = data;
      this.loadDisplay();
    })
  }

  getpurchase(){
  }

  deletepurchase(purchase: Purchase): void {
    this.purchaseService.deletepurchase(purchase.PurchaseId)
      .subscribe(data => {
        this.purchase = this.purchase.filter(u => u !== purchase);
        this.toastr.success('Successfully deleted!!');
      })
  };

  editpurchase(purchase: Purchase): void {
    this.router.navigate(['edit-purchase', purchase.PurchaseId]);

  };

  addpurchase(): void {
    this.router.navigate(['add-purchase']);
  };
}

