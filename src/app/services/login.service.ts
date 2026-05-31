import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn=false;

  toggleLogin()
  {
    this.loggedIn=!this.loggedIn
  }

  isAuthenticated()
  {
    return this.loggedIn;
  }

}
