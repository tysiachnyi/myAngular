import { PostComponent } from './shared/components/post/post.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'Posts', component: PostsPageComponent},
      {path: 'Login', component: LoginPageComponent},
      {path: 'Admin', component: AdminPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
