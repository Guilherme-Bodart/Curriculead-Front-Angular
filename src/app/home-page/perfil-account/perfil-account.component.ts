import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { AuthenticateService } from 'src/services/authenticate.service';
import { UserService } from 'src/services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-perfil-account',
  templateUrl: './perfil-account.component.html',
  styleUrls: ['./perfil-account.component.scss'],
  providers: [MessageService],
})
export class PerfilAccountComponent implements OnInit {
  user = new User({});
  loading = true;

  constructor(
    private _authenticateService: AuthenticateService,
    private _userService: UserService,
    private _router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.user = this._authenticateService.loggedUser;
    if (this.user) {
      this.updateUser();
    }
  }

  editUser() {
    this._userService.editUser(this.user).subscribe((res: any) => {
      this._authenticateService.storeUser(res.user);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Perfil alterado com sucesso!',
        life: 3000,
      });
    });
  }

  updateUser() {
    this._userService.getUserId(this.user._id).subscribe((res: any) => {
      this._authenticateService.storeUser(res.user);
      if (this.user.birthday) this.user.birthday = new Date(this.user.birthday);
      else new Date();
      this.loading = false;
    });
  }
}
