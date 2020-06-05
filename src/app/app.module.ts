import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostComponent } from './shared/components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/module/shared.module';
import { PostPageComponent } from './posts-page/post-page/post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PostsPageComponent,
    PostPageComponent,
    PostComponent
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
