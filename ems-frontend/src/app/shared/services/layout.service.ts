import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }
   private expanded = new BehaviorSubject<boolean>(false);
  expanded$ = this.expanded.asObservable();

  toggle() {
    this.expanded.next(!this.expanded.value);
  }

  close() {
    this.expanded.next(false);
  }
}
