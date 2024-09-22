import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  public loggedUser: User;

  private endpoint = 'https://curriculead-back.vercel.app';

  private _urlRegisterUser = '/auth/register';

  private _urlAuthenticateUser = '/auth/authenticate';
  private _urlForgotPassword = '/auth/forgot_password';
  private _urlResetPassword = '/auth/reset_password';

  constructor(private _http: HttpClient, private _route: Router) {}

  loginUser(user) {
    const url = this.endpoint + this._urlAuthenticateUser;
    return this._http.post(url, user).pipe(
      tap(
        (data) => {
          this.doLoginUser(data);
        },
        (error) => {
          console.log(error.error);
        }
      )
    );
  }

  // Handle login
  doLoginUser(data) {
    this.loggedUser = data.user;
    if (data.user) this.storeUser(data.user);
    if (data.token) this.storeToken(data.token);
    this._route.navigate(['/onboarding/welcome']);
  }

  // Salvar tokens no localstorage
  storeToken(token: string) {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  logout() {
    localStorage.setItem(this.JWT_TOKEN, '');
    localStorage.setItem('loggedUser', '');
  }

  // Retorna o JWT token do localstorage
  getJwtToken() {
    let token = localStorage.getItem(this.JWT_TOKEN);
    return token;
  }

  // Salvar user no localstorage
  storeUser(user: User) {
    localStorage.setItem('loggedUser', JSON.stringify(user));
  }

  getStoreUser(): any {
    return localStorage.getItem('loggedUser');
  }

  createUser(user: User) {
    const url = this.endpoint + this._urlRegisterUser;
    return this._http.post(url, user);
  }

  sendMailReset(email) {
    const url = this.endpoint + this._urlForgotPassword;
    return this._http.post(url, email);
  }

  resetPassword(user) {
    const { password, token } = user;
    const url = this.endpoint + this._urlResetPassword;
    return this._http.post(url, { password: password, token: token });
  }
}
