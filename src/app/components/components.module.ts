import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    TabMenuModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
