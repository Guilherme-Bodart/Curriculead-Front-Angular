import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticateService } from 'src/services/authenticate.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  @Input() user;
  menuItems: MenuItem[];
  activeItem: MenuItem;

  constructor(
    private _authenticateService: AuthenticateService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    if (this.user._id) {
      this.menuItems = [
        { label: 'Início', icon: 'pi pi-fw pi-home' },
        { label: 'Meu Currículo', icon: 'pi pi-fw pi-file-o' },
        { label: 'Perfil', icon: 'pi pi-fw pi-user' },
        { label: 'Sair', icon: 'pi pi-fw pi-sign-out' },
      ];
    } else {
      this.menuItems = [
        { label: 'Início', icon: 'pi pi-fw pi-home' },
        { label: 'Criar Currículo', icon: 'pi pi-fw pi-file-edit' },
        { label: 'Entrar', icon: 'pi pi-fw pi-sign-in' },
      ];
    }

    if (window.location.href.includes('perfil')) this.activeItem = this.menuItems[2];
    else if (window.location.href.includes('curriculum')) this.activeItem = this.menuItems[1];
    else this.activeItem = this.menuItems[0];
  }

  onActiveItemChange(item: MenuItem) {
    this.activeItem = item;
    if(this.activeItem.label == 'Sair') this._authenticateService.logout();
  }

  routeItem(item: MenuItem): string {
    let route = '';
    if (item.label == 'Início') {
      route = '';

    } else if (item.label == 'Criar Currículo' || item.label == 'Meu Currículo') {
      if (this.user._id) route = 'curriculum'
      else route = '/login';

    } else if (item.label == 'Entrar' || item.label == 'Perfil') {
      if (this.user._id) route = 'perfil'
      else route = '/login';

    } else {
      route = '/login';
    }

    return route;
  }

}
