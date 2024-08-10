import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { 

  }

  public get(route: string): Observable<any> {
    return this.httpClient.get(route).pipe(catchError((error) => {
      return this.handleError(error);
    }));
  }

  public post(route: string, body: any): Observable<any> {
    return this.httpClient.post(route, body).pipe(catchError((error) => {
      return this.handleError(error);
    }));
  }

  public put(route: string, body: any): Observable<any> {
    return this.httpClient.put(route, body).pipe(catchError((error) => {
      return this.handleError(error);
    }));
  }

  public delete(route: string): Observable<any> {
    return this.httpClient.delete(route).pipe(catchError((error) => {
      return this.handleError(error);
    }));
  }

  private handleError(error: any) {
    if (error.status === 401) {
      // TODO: unauthorized logic
    }
    return throwError(error);
  }
}
