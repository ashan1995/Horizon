import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

export const TOKEN_NAME: string = 'jwt_token';

@Injectable()
export class AuthService {
  constructor(private http:HttpClient,private router:Router){}

  logout() {
    localStorage.clear();
    this.router.navigate(['/user']);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isAuthenticated(){
    return this.getToken() !== null;
  }

  login(user) {
    const body=JSON.stringify(user);
    const headers= new  HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/json'
    });
    return this.http.post<any>("/api/auth", user,{headers:headers});
  }
}