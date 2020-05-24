import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../shared/module/shared.module';
import {AdminLayoutComponent} from './../shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {PostPageEditComponent} from './post-page-edit/post-page-edit.component';
import {AuthGuard} from '../shared/services/auth.guard';
import {CreatePageComponent} from './create-page/create-page.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminPageComponent,
    LoginPageComponent,
    CreatePageComponent,
    PostPageEditComponent
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
          {path: 'dashboard', component: AdminPageComponent, canActivate: [AuthGuard]},
          {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
          {path: 'post/:id/edit', component: PostPageEditComponent, canActivate: [AuthGuard]}
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AdminModule {

}

