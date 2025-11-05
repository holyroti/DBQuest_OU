import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
//API Http client service. Used for get/post/put/delete calls by the 1/2/3nf services
export class ApiHttpClient {

  private readonly base = (environment.apiUrl ?? '').replace(/\/$/, '');

  constructor(private http: HttpClient) { }

  get<T>(path: string, options: { params?: any; headers?: HttpHeaders | Record<string, string> } = {}): Observable<T> {
    return this.http.get<T>(this.url(path), options);
  }
  post<T>(path: string, body: any, options: { params?: any; headers?: HttpHeaders | Record<string, string> } = {}): Observable<T> {
    return this.http.post<T>(this.url(path), body, options);
  }
  put<T>(path: string, body: any, options: { params?: any; headers?: HttpHeaders | Record<string, string> } = {}): Observable<T> {
    return this.http.put<T>(this.url(path), body, options);
  }
  delete<T>(path: string, options: { params?: any; headers?: HttpHeaders | Record<string, string> } = {}): Observable<T> {
    return this.http.delete<T>(this.url(path), options);
  }

  private url(path: string) {
    const p = path.startsWith('/') ? path : `/${path}`;
    return this.base ? `${this.base}${p}` : `/api${p}`;
  }
}
