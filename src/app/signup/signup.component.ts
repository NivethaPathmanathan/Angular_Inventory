import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/authService/auth.service';
import { User } from '../model/user';
import { ConfirmedValidator } from '../Validators/confirmed-validator'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title : String;
  signupForm : FormGroup;
  model : User;
  submitted = false;

  constructor(
    private fb :FormBuilder,
    private authservice : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
    this.title = 'Create an account';
    this.createForm()
  }

  createForm() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passconf: ['', Validators. required],
      first_name: ['', Validators.required],
      last_name: [''],
      email: ['', [Validators.required, Validators.email]]
    }, { validator: ConfirmedValidator('password', 'passconf')
   })
  }

  get f(){
    return this.signupForm.controls
  }

  onSubmit(){
    this.model = this.signupForm.value;
    this.submitted = true;
    if(this.signupForm.invalid){
      return;
    }
    this.authservice.createForm(this.signupForm.value)
    .subscribe(data => {
      this.router.navigate(['login']);
      if(this.signupForm.status){
          this.signupForm.reset();
      }
    },
      error => {
        alert("Hi");
      });
  }

}
