import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { AuthenticateService } from 'src/services/authenticate.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent implements OnInit {

  constructor(
    private _authenticateService: AuthenticateService,
    private _router: Router,
  ) { }

  newUser = new User({});
  confirmPassword = '';

  ngOnInit(): void {
  }

  disableButton(): boolean {
    if (this.newUser.name && this.newUser.email && this.newUser.password && this.newUser.password == this.confirmPassword) return false;
    return true;
  }

  registerUser() {
    this._authenticateService.createUser(this.newUser).subscribe((res) => {
      this._router.navigate([`/login`]);
    })
  }

  goToLogin(){
    this._router.navigate([`/login`]);
  }

}
