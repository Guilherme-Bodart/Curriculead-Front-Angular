import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { LoginPageComponent } from './login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    children: [
      { path: '', component: SigninPageComponent },
      { path: 'register', component: RegisterPageComponent },
    ]
  },
];

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    SigninPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ],
  exports: [RouterModule],
})
export class LoginPageModule { }
