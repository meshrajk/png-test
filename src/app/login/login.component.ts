import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = "hbingley1";
  password = "CQutx25i8r";

  constructor(private authService: AuthService, private routes: Router) {}
  
  onLoginClicked() {
    this.authService.getAuthorization(this.username, this.password).subscribe((response:any)=>{
      this.authService.loggedInUser = response;
      this.routes.navigate(['home']);
    });
  }
}
