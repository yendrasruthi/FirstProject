import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  // nextStep = 60;
  currentItem = 60;
  timeLeft: any = 0;
  timeLeft1: any = 0;
  interval: any;
  startPause: boolean = true;
  // startCount: number = 0;
  // pauseCount: number = 0;
  listOftimeToDisplay: any = [];
  pausedArray: any = [];
  timerDisplayList: any;
  startPauseCountr = { start: 0, pause: 0 }
  // @Output() newItemEvent = new EventEmitter<string>();
  // @Output() nextStep = new EventEmitter<any>();
  // @Output() previousStep = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  assignTime($event: any) {
    // if (this.timeLeft1 === $event) {
    this.timeLeft1 = $event;
    // }
  }
  startTimer() {
    this.startPause = !this.startPause;
    if (this.startPause == false) {
      this.startPauseCountr.start++
      this.listOftimeToDisplay.push("Started At" + new Date())
      this.interval = setInterval(() => {
        if (this.timeLeft1 > 0) {
          this.timeLeft1--;
        } else {
          this.timeLeft1 = 60;
        }
      }, 1000)
    } else if (this.startPause == true) {
      // this.timeLeft1 = $event;
      this.pausedArray.push(this.timeLeft1)
      this.startPauseCountr.pause++
      this.listOftimeToDisplay.push("paused At" + new Date())
      this.pauseTimer();
    }
    this.timerDisplayList = this.listOftimeToDisplay;

  }
  EnterTimer(timeLeft: any) {
    console.log(timeLeft.value)
    this.timeLeft = timeLeft.value;
    this.timeLeft1 = this.timeLeft;
    this.currentItem = this.timeLeft1;
    // this.nextStep.emit(this.timeLeft1);
  }
  pauseTimer() {
    clearInterval(this.interval);
  }

  clearTimer() {
    this.startPauseCountr = {
      ...this.startPauseCountr,
      start: 0,
      pause: 0
    }
    this.timeLeft1 = 0;
    clearInterval(this.interval);
    this.timerDisplayList = [];
  }

}
