import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  query$: BehaviorSubject<string>;

  constructor() {
    this.query$ = new BehaviorSubject('');
  }

  get queryString$(): Observable<string> {
    return this.query$.asObservable();
  }

  updateQuery(query: string) {
    this.query$.next(query);
  }
}
