import { Injectable } from '@angular/core';
import { ApiService, PaginatedRequest } from './api.service';
import { HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private readonly apiService: ApiService) {}

  private _post = new BehaviorSubject<Post>(null as unknown as Post);

  public storePost(post: Post): void {
    this._post.next(post);
  }

  get post$(): Observable<Post> {
    return this._post.asObservable();
  }

  public getAll(options?: PaginatedRequest): Observable<HttpResponse<any>> {
    return this.apiService.get<any>('/posts', options);
  }

  public getOneById(
    postId: string,
    options?: PaginatedRequest
  ): Observable<HttpResponse<any>> {
    return this.apiService.get<any>(`/posts/${postId}`, options);
  }

  public getAllCommentsByPost(
    postId: string,
    options?: PaginatedRequest
  ): Observable<HttpResponse<any>> {
    return this.apiService.get<any>(`/posts/${postId}/comments`, options);
  }

  // TODO: Fix typings. The apiary model is the DB modal, not the POST apiary model.
  public createComment(postId: string, comment: any) {
    return this.apiService.post<any>(`/posts/${postId}/comments`, comment);
  }
}
