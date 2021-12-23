import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './pages/comments/comments.component';
import { PostComponent } from './pages/posts/post/post.component';
import { PostsComponent } from './pages/posts/posts.component';
import { MainLayoutComponent } from './shared/ui/patterns/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./pages/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'comments',
    loadChildren: () =>
      import('./pages/comments/comments.module').then((m) => m.CommentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
