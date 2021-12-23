import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { PostsService } from 'src/app/core/services/posts.service';
import { ToastrService } from 'ngx-toastr';
import { CommentsService } from 'src/app/core/services/comments.service';
import { Comment } from 'src/app/shared/models/comment.model';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(
    private readonly fb: FormBuilder,
    private postsService: PostsService,
    private commentsService: CommentsService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta,
    private readonly toastr: ToastrService
  ) {}
  postId!: string;
  commentId!: string;
  comment!: Comment;
  isEditing: boolean = false;
  newCommentForm = this.fb.group({
    user: ['', Validators.required],
    content: ['', [Validators.required]],
  });

  get userName() {
    return this.newCommentForm.get('user');
  }
  get commentContent() {
    return this.newCommentForm.get('content');
  }

  ngOnInit(): void {
    this.postId = this.activeRoute.snapshot.paramMap.get('postId') as string;
    this.commentId = this.activeRoute.snapshot.paramMap.get(
      'commentId'
    ) as string;

    this.title.setTitle('Add comment');

    if (this.commentId) {
      this.title.setTitle('Edit comment');

      //We are Editing
      this.isEditing = true;
      this.commentsService.getOneById(this.commentId).subscribe((res) => {
        this.comment = res.body;
        this.meta.addTag({
          postId: this.comment.postId.toString(),
        });
        this.newCommentForm.patchValue({
          user: this.comment.user,
          content: this.comment.content,
        });
      });
    }
  }

  onNewCommentSubmit() {
    if (!this.isEditing) {
      const body = {
        ...this.newCommentForm.value,
        date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
      };
      this.postsService.createComment(this.postId, body).subscribe(
        (res) => {
          if (
            this.activeRoute.snapshot.queryParamMap.get(
              'fromCommentsPage'
            ) as string
          ) {
            this.router.navigateByUrl(`/comments`);
          } else {
            this.router.navigateByUrl(`/posts/${this.postId}`);
          }

          this.toastr.success('Comment added!');
        },
        (err) => {
          this.toastr.error('Something went wrong, check your form please!');
        }
      );
    } else {
      const body = {
        ...this.newCommentForm.value,
        date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
        postId: this.postId,
      };
      this.commentsService.updateComment(this.commentId, body).subscribe(
        (res) => {
          if (
            this.activeRoute.snapshot.queryParamMap.get(
              'fromCommentsPage'
            ) as string
          ) {
            this.router.navigateByUrl(`/comments`);
          } else {
            this.router.navigateByUrl(`/posts/${this.postId}`);
          }

          this.toastr.success('Comment edited!');
        },
        (err) => {
          this.toastr.error('Something went wrong, check your form please!');
        }
      );
    }
  }
}
