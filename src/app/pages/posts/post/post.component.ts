import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/core/services/posts.service';
import { Comment } from 'src/app/shared/models/comment.model';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  public post: Post = new Post();
  constructor(
    private activeRoute: ActivatedRoute,
    private postsService: PostsService,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    const postId = this.activeRoute.snapshot.paramMap.get('postId') as string;
    if (postId) {
      this.getPost(postId);
    }
  }

  private getPost(postId: string) {
    this.postsService.getOneById(postId).subscribe((res) => {
      this.post = res.body;

      this.meta.addTag({
        slug: this.post.slug,
      });

      this.title.setTitle(this.post.title);

      this.getPostComments(postId);
    });
  }

  private getPostComments(postId: string) {
    this.postsService.getAllCommentsByPost(postId).subscribe((res) => {
      this.post.comments =
        res.body.sort((a: Comment, b: Comment) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }) ?? [];
    });
  }
}
