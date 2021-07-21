import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { ListProductComponent } from './Product/list-product/list-product.component';
import { EditProductComponent } from './Product/edit-product/edit-product.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductService } from './Services/productService/product.service';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserPipe } from './user.pipe';
import { AddSalesComponent } from './Sales/add-sales/add-sales.component';
import { EditSalesComponent } from './Sales/edit-sales/edit-sales.component';
import { ListSalesComponent } from './Sales/list-sales/list-sales.component';
import { AddPurchaseComponent } from './Purchase/add-purchase/add-purchase.component';
import { EditPurchaseComponent } from './Purchase/edit-purchase/edit-purchase.component';
import { ListPurchaseComponent } from './Purchase/list-purchase/list-purchase.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ListProductComponent,
    EditProductComponent,
    UserPipe,
    AddSalesComponent,
    EditSalesComponent,
    ListSalesComponent,
    AddPurchaseComponent,
    EditPurchaseComponent,
    ListPurchaseComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    // BsDatepickerModule,
    RouterModule.forRoot([]),
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    })
  ],
  providers: [ProductService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
