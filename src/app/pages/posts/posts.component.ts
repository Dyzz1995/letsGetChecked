import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PostsService } from 'src/app/core/services/posts.service';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public posts!: Post[];
  constructor(private postsService: PostsService, private title: Title) {
    this.title.setTitle('All posts');
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  private getAllPosts() {
    this.postsService.getAll().subscribe((res) => {
      this.posts =
        res.body.sort((a: Post, b: Post) => {
          return (
            new Date(b.publish_date).getTime() -
            new Date(a.publish_date).getTime()
          );
        }) ?? [];
    });
  }

  onSeeMoreClick(post: Post) {}

  onPostClick(post: Post) {
    post.expanded = !post.expanded;

    this.postsService
      .getAllCommentsByPost(post.id.toString())
      .subscribe((res) => {
        post.comments = res.body;
      });
  }
}
