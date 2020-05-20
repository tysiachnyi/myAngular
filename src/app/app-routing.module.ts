import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { PostPageComponent } from './posts-page/post-page/post-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { PostsPageComponent } from './posts-page/posts-page.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'Posts', component: PostsPageComponent},
      {path: 'Posts/:id', component: PostPageComponent}
    ]
  },
  {
    // path: 'Admin', loadChildren: './admin/admin.module#AdminModule'
   path: 'Admin', loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
