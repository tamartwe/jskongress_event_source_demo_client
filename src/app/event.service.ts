import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
 
import { Event } from './event';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient) {}

  private eventUrl = 'http://localhost:3000/events';
  
  followUser(userId: string, followingId: string): Observable<any> {
    const url = `${this.eventUrl}`;
    const event = new Event();
    event.action = 'FollowUser';
    event.userId = userId;
    event.followsUser = followingId;
    console.log(JSON.stringify(event));
    return this.http.post(url, event, httpOptions).pipe(
      catchError(this.handleError<any>(`followUser id=${JSON.stringify(event)}`))
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
