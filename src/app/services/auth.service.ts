import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "https://api.escuelajs.co/api/v1/auth/"


  
  constructor(private httpClient: HttpClient) { }

  login(login:Login):Observable<Login> {
    return this.httpClient.post<Login>(this.url+"login",login)
  }

  getCurrentUser():Observable<User>{
    return this.httpClient.get<User>(this.url+"profile")
  }

}
