import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
 
import { User } from './user';

import { USERS } from './following-mock';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FollowingService {

  constructor(
    private http: HttpClient) {}

  private userUrl = 'http://localhost:3000/userFollows';
  
  
  getFollowing(mainUserID: string): Observable<User[]> {
    const url = `${this.userUrl}/${mainUserID}`;
    return this.http.get<User[]>(url)
      .pipe(catchError(this.handleError('getUserFollows', []))
    );
  }

  followUser(): void {

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
