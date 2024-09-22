import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/services/authenticate.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})

export class SigninPageComponent implements OnInit {

  constructor(
    private _authenticateService: AuthenticateService,
    private _router: Router,
  ) { }

  email = '';
  password = '';

  ngOnInit(): void {
  }

  login() {
    this._authenticateService.loginUser({ email: this.email, password: this.password }).subscribe(res => {
      this._router.navigate([``]);
    })
  }

  goToHome(){
    this._router.navigate([``]);
  }
}

