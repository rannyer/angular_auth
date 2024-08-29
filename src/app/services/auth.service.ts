import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "https://freeapi.miniprojectideas.com/api/User/"

  constructor(private httpClient: HttpClient) { }

  login(login:Login):Observable<Login> {
    return this.httpClient.post<Login>(this.url+"login", login)
  }

}
