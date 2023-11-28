import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { HomePageComponent } from './home-page.component';
import { HomeComponent } from './home/home.component';
import { PerfilAccountComponent } from './perfil-account/perfil-account.component';
import { PublicPageComponent } from './public-page/public-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'perfil', component: PerfilAccountComponent },
      {
        path: 'curriculum',
        component: CurriculumComponent,
      },
      {
        path: 'curriculum/:url',
        component: PublicPageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    HomePageComponent,
    PerfilAccountComponent,
    CurriculumComponent,
    HomeComponent,
    PublicPageComponent,
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
    CalendarModule,
    InputMaskModule,
    InputTextareaModule,
    RatingModule,
    DividerModule,
    InputSwitchModule,
    ToastModule,
    RadioButtonModule,
  ],
  exports: [RouterModule],
})
export class HomePageModule {}
