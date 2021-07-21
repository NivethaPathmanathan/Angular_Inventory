import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { User } from '../../model/user';
import { Observable } from "rxjs";
import { LoginComponent } from 'src/app/login/login.component';
import { UserPipe } from 'src/app/user.pipe';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl: string = "http://localhost:3000";

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(
    private http : HttpClient) {}

    signup(data: User){
      return this.http.post('$(this.baseurl)', data, this.httpOptions)
    }

    createForm(user : User) {
      return this.http.post(this.baseurl + '/users', user);
    }

    getUser():Observable<User[]>{
      return this.http.get<User[]>(this.baseurl);
    }

    login(user : User){
     return this.http.post(`${this.baseurl}/user`,{username: user.username , password: user.password});
    }

  //   getAll() {
  //     return this.http.get<User[]>(`${this.baseurl}/users`);
  // }


}
