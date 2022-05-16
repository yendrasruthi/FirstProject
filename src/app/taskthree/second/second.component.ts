import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  timeLeft: any = 0;
  timeLeft1: any = 0;
  interval: any;
  startPause: boolean = true;
  startCount: number = 1;
  pauseCount: number = 1;
  listOftimeToDisplay: any = [];
  pausedArray: any = [];

  @Output() nextStep = new EventEmitter<any>();
  @Output() clearTimer = new EventEmitter<any>();
  @Output() enterValue = new EventEmitter<any>();
  startTimer() {
    this.nextStep.emit();
    // this.enterValue.emit(this.timeLeft)
  }


  // startTimer() {
  //   this.startPause = !this.startPause;
  //   if (this.startPause == false) {
  //     this.startCount++
  //     this.listOftimeToDisplay.push("Started At" + new Date())
  //     this.interval = setInterval(() => {
  //       if (this.timeLeft1 > 0) {
  //         this.timeLeft1--;
  //       } else {
  //         this.timeLeft1 = 60;
  //       }
  //     }, 1000)
  //   } else if (this.startPause == true) {
  //     console.log(this.timeLeft1)
  //     this.pausedArray.push(this.timeLeft1)
  //     this.pauseCount++
  //     this.listOftimeToDisplay.push("paused At" + new Date())
  //     this.pauseTimer();
  //   }
  //   console.log(this.startCount)
  //   console.log(this.pauseCount)
  //   console.log(this.listOftimeToDisplay)

  // }
  EnterTimer() {
    this.enterValue.emit(this.timeLeft1)
  }
  resetTimer() {
    this.timeLeft1 = 0;
    this.clearTimer.emit()
    // clearInterval(this.interval);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
