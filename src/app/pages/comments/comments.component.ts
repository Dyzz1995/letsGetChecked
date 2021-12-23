import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommentsService } from 'src/app/core/services/comments.service';
import { PostsService } from 'src/app/core/services/posts.service';
import { Comment } from 'src/app/shared/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  public comments!: Comment[];

  constructor(private commentsService: CommentsService, private title: Title) {
    this.title.setTitle('All comments');
  }

  ngOnInit() {
    this.getAllComments();
  }

  private getAllComments() {
    this.commentsService.getAll().subscribe((res) => {
      this.comments =
        res.body.sort((a: Comment, b: Comment) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }) ?? [];
    });
  }
}
