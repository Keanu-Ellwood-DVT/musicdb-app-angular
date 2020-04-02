import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchStateService {
  constructor() {}

  private stateSource: BehaviorSubject<boolean> = new BehaviorSubject(
    true
  );

  public searchState = this.stateSource.asObservable();

  public setMessage(value: boolean) {
    this.stateSource.next(value);
  }
}
