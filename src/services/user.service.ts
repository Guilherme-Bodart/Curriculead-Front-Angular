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

  private endpoint = 'https://curriculead-back.vercel.app'
  private _urlUser = '/user/';

  constructor(
    private _http: HttpClient,
    private _route: Router,
    private _authenticateService: AuthenticateService,
  ) { }

  // Edit usuário com método PUT
  editUser(user: User) {
    const token = this._authenticateService.getJwtToken();
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

  getUserId(userId) {
    const token = this._authenticateService.getJwtToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const url = this.endpoint + this._urlUser + userId;
    return this._http.get(url, { headers });
  }
}
