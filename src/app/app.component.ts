import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private loginService:LoginService){}

  isLoggedIn()
  {
    return this.loginService.isAuthenticated()
  }

  toggleLogin()
  {
    this.loginService.toggleLogin()
  }

}
