import { Component, inject, NgModule } from '@angular/core';
import { Login } from '../../models/login';
import {FormsModule} from '@angular/forms'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: Login = {
    email: "",
    password: ""
  }

  constructor(private authService:AuthService, private router: Router){}

  onLogin(){

    this.authService.login(this.login).subscribe({
      next: (res:any)=> {
          console.log(res)
          localStorage.setItem("token_angular", res.access_token)
          const token = localStorage.getItem("token_angular")
          const decodeToken = jwtDecode(token!)
          console.log(decodeToken)
          this.router.navigateByUrl('')  
      },
      error: () => alert("Senha ou usuário inválidos")
    })
  }

}
