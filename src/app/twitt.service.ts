import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Twitt } from './twitt';
import { TWITTS } from './twitt-mock';

@Injectable({
  providedIn: 'root',
})
export class TwittService {

  constructor() { }

  getTwitts(): Observable<Twitt[]> {
    return of(TWITTS);
  }

  getTwitt(id: number): Observable<Twitt> {
       return of(TWITTS.find(twitt => twitt.id === id));
  }
}