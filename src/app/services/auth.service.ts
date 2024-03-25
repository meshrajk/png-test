import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  
  public get isAuthenticatedUser() : boolean {
    return this.loggedInUser != undefined;
  }
  
  authUrl = 'https://dummyjson.com/auth/login';
  loggedInUser: any;
  constructor(private httpClient: HttpClient) { }

  getAuthorization(userName: string, password: string){
    return this.httpClient.post(this.authUrl, {username: userName, password: password}, {headers: { 'Content-Type': 'application/json' }});
  }
}
