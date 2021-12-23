import { Injectable } from '@angular/core';
import { ApiService, PaginatedRequest } from './api.service';
import { HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Comment } from 'src/app/shared/models/comment.model';
@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private readonly apiService: ApiService) {}

  private _comment = new BehaviorSubject<Comment>(null as unknown as Comment);

  public storeComment(comment: Comment): void {
    this._comment.next(comment);
  }

  get comment$(): Observable<Comment> {
    return this._comment.asObservable();
  }

  public getAll(options?: PaginatedRequest): Observable<HttpResponse<any>> {
    return this.apiService.get<any>('/comments', options);
  }

  public getOneById(
    commentId: string,
    options?: PaginatedRequest
  ): Observable<HttpResponse<any>> {
    return this.apiService.get<any>(`/comments/${commentId}`, options);
  }

  // TODO: Fix typings. The apiary model is the DB modal, not the POST apiary model.
  public updateComment(commentId: string, comment: any) {
    return this.apiService.put<any>(`/comments/${commentId}`, comment);
  }
}
