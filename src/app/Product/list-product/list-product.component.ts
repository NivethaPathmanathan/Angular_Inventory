import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from 'src/app/Services/productService/product.service';
import { Observable } from "rxjs";
import { Product } from '../../model/product.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public searchText : string;
  p: any;
  private _allPro: Observable<Product[]>;
  public get allPro(): Observable<Product[]> {
    return this._allPro;
  }

  public set allPro(value: Observable<Product[]>) {
    this._allPro = value;
  }
  product: Product[] = [];
  constructor(private router: Router,
    private toastr : ToastrService,
     private productservice: ProductService) {

      }

  loadDisplay(){
    //debugger;
    this.allPro = this.productservice.getproduct();
  }

  ngOnInit() {
    this.productservice.getproduct().subscribe(data => {
      this.product = data;
      this.loadDisplay();
    })
  }

  getproduct(){
  }

  deleteproduct(product: Product): void {
    this.productservice.deleteproduct(product.ProductId)
      .subscribe(data => {
        this.product = this.product.filter(u => u !== product);
        this.toastr.success('Successfully deleted!!');
      })
  };

  editproduct(product: Product): void {
    localStorage.removeItem("editProductID");
    localStorage.setItem("editProductID", product.ProductId.toString());
    this.router.navigate(['edit-product']);
  };

  addproduct(): void {
    this.router.navigate(['add-product']);
  };
}
