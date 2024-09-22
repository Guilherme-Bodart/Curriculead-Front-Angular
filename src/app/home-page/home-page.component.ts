import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { AuthenticateService } from 'src/services/authenticate.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  user = new User({});
  loading = true;

  constructor(
    private _authenticateService: AuthenticateService,
    private _userService: UserService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    if (this._authenticateService.getStoreUser()) {
      this.user = new User(
        JSON.parse(this._authenticateService.getStoreUser())
      );
    }

    if (this.user._id) {
      this._userService.getUsers().subscribe(
        (res) => {
          this._authenticateService.doLoginUser({ user: this.user });
          this.loading = false;
        },
        (error) => {
          this._authenticateService.logout();
          this._router.navigate([``]);
          this.loading = false;
        }
      );
    } else {
      this.loading = false;
    }
  }
}
