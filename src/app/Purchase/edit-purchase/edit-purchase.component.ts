import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from 'src/app/Services/purchaseService/purchase.service';
import { first } from "rxjs/operators";
import { Purchase } from './../../model/purchase.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-purchase',
  templateUrl: './edit-purchase.component.html',
  styleUrls: ['./edit-purchase.component.css']
})
export class EditPurchaseComponent implements OnInit {
  purchase: Purchase;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
     private router: Router,
     private route: ActivatedRoute,
     private toastr : ToastrService,
      private purchaseservice: PurchaseService) {

      }

  ngOnInit() {
    let PurchaseID = this.route.snapshot.paramMap.get('id1');


    this.editForm = this.formBuilder.group({
      PurchaseID: [""],
      PurchaseDate: ['', Validators.required],
      NoReceived: ['', Validators.required],
      SupplierName: ['', Validators.required],
      ProductId: ['']
    });

    this.purchaseservice.getpurchaseById(+PurchaseID)
    .subscribe(data => {
      this.editForm.setValue(data);
      })
  }

  showMsg: boolean = false;

  onSubmit(){
    this.purchaseservice.updatepurchase(this.editForm.value)
    .pipe(first())
    .subscribe(
      data => {
        this.toastr.success('Successfully updated!!');
        this.router.navigate(['list-purchase']);
        this.showMsg = true;
        this.editForm.reset();
      },
      error => {
        alert(error);
      });
  }
}

