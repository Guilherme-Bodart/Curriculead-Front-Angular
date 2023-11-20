import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { LoadingPageComponent } from './loading/loading-page/loading-page.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    NavbarComponent,
    LoadingPageComponent
  ],
  imports: [
    CommonModule,
    TabMenuModule,
    ProgressSpinnerModule
  ],
  exports: [
    NavbarComponent,
    LoadingPageComponent
  ]
})
export class ComponentsModule { }
