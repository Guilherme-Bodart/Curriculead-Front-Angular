import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreInformationEnum } from 'src/enumerators';
import { User } from 'src/models/user';
import { AuthenticateService } from 'src/services/authenticate.service';

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
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.user = new User(JSON.parse(this._authenticateService.getStoreUser()));

    if (this.user._id) {
      this._authenticateService.doLoginUser({ user: this.user });
    }
    this.loading = false;
  }
}
