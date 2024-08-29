import { Component, inject, NgModule } from '@angular/core';
import { Login } from '../../models/login';
import {FormsModule} from '@angular/forms'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: Login = {
    EmailId: "",
    Password: ""
  }

  constructor(private authService:AuthService, private routes: Router){}

  onLogin(){
    this.authService.login(this.login).subscribe({
      next: (res:any)=> {
        if(res.result){
          console.log(res)
          alert("Login funcionou")
          this.routes.navigateByUrl('')
        }else{
          alert(res.message)
        }
      }
    })
  }

}
