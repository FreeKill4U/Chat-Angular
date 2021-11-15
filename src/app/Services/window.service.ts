import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  public static Window = 0;

  constructor() { }

  private OpenWindowSource = new Subject<any>();
  CallToOpenWindowCalled$ = this.OpenWindowSource.asObservable();
  OpenWindow(window: number) {
    this.OpenWindowSource.next(window);
  }
}
