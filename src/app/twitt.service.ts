import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Twitt } from './twitt';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class TwittService {

  constructor(private http: HttpClient) { }

  private twittsUrl = 'http://localhost:3000/newsfeed';

  private singleTwittUrl = 'http://localhost:3000/twitt';

  getTwitts(userId: string): Observable<Twitt[]> {
    const url = `${this.twittsUrl}/${userId}`;
    return this.http.get<Twitt[]>(url)
      .pipe(catchError(this.handleError('getTwitt', []))
    );
  }

  getTwitt(userId: string, text: string): Observable<any> {
    const url = `${this.singleTwittUrl}/${userId}?text=${text}`;
    return this.http.get<Twitt>(url)
      .pipe(catchError(this.handleError('getTwitt', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  
}