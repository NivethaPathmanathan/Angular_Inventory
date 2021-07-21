import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { EditProductComponent } from './Product/edit-product/edit-product.component';
import { ListProductComponent } from './Product/list-product/list-product.component';
import { AddPurchaseComponent } from './Purchase/add-purchase/add-purchase.component';
import { ListPurchaseComponent } from './Purchase/list-purchase/list-purchase.component';
import { EditPurchaseComponent } from './Purchase/edit-purchase/edit-purchase.component';
import { AddSalesComponent } from './Sales/add-sales/add-sales.component';
import { ListSalesComponent } from './Sales/list-sales/list-sales.component';
import { EditSalesComponent } from './Sales/edit-sales/edit-sales.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: "add-product", component: AddProductComponent },
  { path: 'edit-product', component: EditProductComponent },
  { path: 'list-product', component: ListProductComponent },
  { path: "add-purchase", component: AddPurchaseComponent },
  { path: 'edit-purchase/:id1', component: EditPurchaseComponent },
  { path: 'list-purchase', component: ListPurchaseComponent },
  { path: "add-sales", component: AddSalesComponent },
  { path: 'edit-sales', component: EditSalesComponent },
  { path: 'list-sales', component: ListSalesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
