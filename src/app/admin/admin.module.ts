import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../shared/module/shared.module';
import {AdminLayoutComponent} from './../shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AdminPageComponent} from './admin-page/admin-page.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/Admin/Login', pathMatch: 'full'},
          {path: 'Login', component: LoginPageComponent},
          {path: 'Dashboard', component: AdminPageComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AdminModule {

}

