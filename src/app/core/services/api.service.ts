import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
type _HttpParams =
  | HttpParams
  | {
      [param: string]:
        | string
        | number
        | boolean
        | ReadonlyArray<string | number | boolean>;
    };

export type PaginatedResponse<T extends string, U> = {
  [key in T]: {
    results: U[];
    total: number;
  };
};

export type PaginatedRequest = {
  page: number;
  limit: number;
};

export const defaultPaginationOption: PaginatedRequest = {
  page: 0,
  limit: 5,
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiURL: string = environment.apiUrl;

  private defaultOptions = {
    // https://angular.io/guide/http
    responseType: 'json' as const,
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: false,
  };

  constructor(private readonly httpClient: HttpClient) {}

  public get<T>(
    endpoint: string,
    params: _HttpParams = {}
  ): Observable<HttpResponse<T>> {
    return this.httpClient.get<T>(`${this.apiURL}${endpoint}`, {
      ...this.defaultOptions,
      params,
      observe: 'response',
    });
  }

  public post<T>(
    endpoint: string,
    body: any | null,
    params: _HttpParams = {}
  ): Observable<HttpResponse<T>> {
    return this.httpClient.post<T>(`${this.apiURL}${endpoint}`, body, {
      ...this.defaultOptions,
      params,
      observe: 'response',
    });
  }

  public delete<T>(
    endpoint: string,
    params: _HttpParams = {}
  ): Observable<HttpResponse<T>> {
    return this.httpClient.delete<T>(`${this.apiURL}${endpoint}`, {
      ...this.defaultOptions,
      params,
      observe: 'response',
    });
  }

  public patch<T>(
    endpoint: string,
    body: any | null,
    params: _HttpParams = {}
  ): Observable<HttpResponse<T>> {
    return this.httpClient.patch<T>(`${this.apiURL}${endpoint}`, body, {
      ...this.defaultOptions,
      params,
      observe: 'response',
    });
  }

  public put<T>(
    endpoint: string,
    body: any | null,
    params: _HttpParams = {}
  ): Observable<HttpResponse<T>> {
    return this.httpClient.put<T>(`${this.apiURL}${endpoint}`, body, {
      ...this.defaultOptions,
      params,
      observe: 'response',
    });
  }
}
