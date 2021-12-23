import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from 'src/app/shared/ui/patterns/main-layout/main-layout.component';
import { FormComponent } from './post/form/form.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: PostsComponent,
      },
      {
        path: ':postId',
        component: PostComponent,
      },
      {
        path: ':postId/new/comment',
        component: FormComponent,
      },
      {
        path: ':postId/edit/comment/:commentId',
        component: FormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
