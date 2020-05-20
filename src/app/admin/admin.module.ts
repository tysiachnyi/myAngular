import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../shared/module/shared.module';
import {AdminLayoutComponent} from './../shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {PostPageEditComponent} from './post-page-edit/post-page-edit.component';


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
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: AdminPageComponent},
          {path: 'post/:id/edit', component: PostPageEditComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AdminModule {

}

