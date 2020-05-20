import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostComponent } from './shared/components/post/post.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PostPageComponent } from './posts-page/post-page/post-page.component';
import { SharedModule } from './shared/module/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostsPageComponent,
    PostComponent,
    AdminPageComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
