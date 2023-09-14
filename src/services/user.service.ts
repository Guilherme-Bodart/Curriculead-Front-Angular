import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  public loggedUser: User;

  private endpoint = 'http://localhost:3030'
  private _urlUser = '/user/';

  constructor(
    private _http: HttpClient,
    private _route: Router,
    private _authenticateService: AuthenticateService,
  ) { }

  // Edit usuário com método PUT
  editUser(user: User) {
    console.log(this._authenticateService.getJwtToken());

    const token = this._authenticateService.getJwtToken();
    console.log(token);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const url = this.endpoint + this._urlUser + user._id;
    return this._http.put(url, user, { headers });
  }

  getUsers() {
    const token = this._authenticateService.getJwtToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const url = this.endpoint + this._urlUser;
    return this._http.get(url, { headers });
  }

  getUserId(user: User) {
    const token = this._authenticateService.getJwtToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const url = this.endpoint + this._urlUser + user._id;
    return this._http.get(url, { headers });
  }
}