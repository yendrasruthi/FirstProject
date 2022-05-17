import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtillService {
  items: any = [];
  startPauseCountArray: any = []
  count: any = [];
  addedItems = new BehaviorSubject(null);
  timerListItems = new BehaviorSubject(null);
  startPauseCount = new BehaviorSubject(null);
  timeCount = new BehaviorSubject(null);
  constructor() { }

  setItems(item: any) {
    this.items = item;
    this.addedItems.next(this.items);
  }
  getItems() {
    return this.items;
  }
  setTimerListItems(item: any) {
    this.items = item;
    this.timerListItems.next(this.items);
  }
  setStartPauseCount(item: any) {
    this.startPauseCountArray = item;
    this.startPauseCount.next(this.startPauseCountArray);
  }


  setCount(item: any) {
    this.count = item;
    this.timeCount.next(this.count);
  }
}


