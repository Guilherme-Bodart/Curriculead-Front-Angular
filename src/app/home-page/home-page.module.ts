import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule, Routes } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { PerfilAccountComponent } from './perfil-account/perfil-account.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { HomeComponent } from './home/home.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'perfil', component: PerfilAccountComponent },
      { path: 'curriculum', component: CurriculumComponent },
    ]
  },
];

@NgModule({
  declarations: [
    HomePageComponent,
    PerfilAccountComponent,
    CurriculumComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PipesModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CalendarModule
  ],
  exports: [RouterModule],

})
export class HomePageModule { }
