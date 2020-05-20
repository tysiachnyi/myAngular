import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostComponent } from './shared/components/post/post.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PostPageComponent } from './posts-page/post-page/post-page.component';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostsPageComponent,
    PostComponent,
    LoginPageComponent,
    AdminPageComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
