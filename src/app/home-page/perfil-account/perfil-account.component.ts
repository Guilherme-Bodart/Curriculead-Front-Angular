import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { AuthenticateService } from 'src/services/authenticate.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-perfil-account',
  templateUrl: './perfil-account.component.html',
  styleUrls: ['./perfil-account.component.scss']
})

export class PerfilAccountComponent implements OnInit {

  user = new User({});
  loading = true;

  constructor(
    private _authenticateService: AuthenticateService,
    private _userService: UserService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.user = this._authenticateService.loggedUser;
    console.log(this._authenticateService.loggedUser);

    if(this.user) this.loading = false
    this.user.birthday = new Date(this.user.birthday)
  }

  editUser() {
    this._userService.editUser(this.user).subscribe((res) => {
      this._authenticateService.doLoginUser({ res })
    })
  }
}
