import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/authService/auth.service';
import { User } from '../model/user';
import { Observable } from "rxjs";
//import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public searchText : string;
   title : String;
   loginForm : FormGroup;
   model : User;
   submitted = false;
   private _allUser: Observable<User[]>;
   public get allUser(): Observable<User[]> {
     return this._allUser;
   }

   public set allUser(value: Observable<User[]>) {
     this._allUser = value;
   }
   users: User[] = [];
  constructor(
     private fb :FormBuilder,
     private authservice : AuthService,
     private router : Router,
     private toastr :ToastrService
   ) { }

  ngOnInit() {
     this.title = 'Login to the system';

     this.loginForm = this.fb.group({
       id:[],
       username: [null, [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z0-9]*')] ],
       password: [null, [Validators.required, Validators.minLength(6)] ]
     });

        }

  get f(){
    return this.loginForm.controls
  }

   onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authservice.login(this.loginForm.value)
    .subscribe((data:Array<User>) => {
      if(data.length > 0){
      this.toastr.success('Successfully loggedin!!');
      this.router.navigate(['']);
      console.log(data)
      }else{
        this.toastr.error('Incorrect Username and/or Password!');
      }
    },
    (err) => {
      console.log(err)});

  }


}
