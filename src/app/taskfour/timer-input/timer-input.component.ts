import { Component, OnInit } from '@angular/core';
import { UtillService } from 'src/app/services/utill.service';

@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.scss']
})
export class TimerInputComponent implements OnInit {
  timeLeft: any = 0;
  timeLeft1: any = 0;
  interval: any;
  startPause: boolean = true;
  startCount: number = 0;
  pauseCount: number = 0;
  listOftimeToDisplay: any = [];
  pausedArray: any = [];

  constructor(private utilService: UtillService) { }

  ngOnInit(): void {
    this.utilService.addedItems.subscribe(addedItem => {
    })
    let startPauseCount = {
      startCount: 0,
      pauseCount: 0
    }
    this.utilService.setStartPauseCount(startPauseCount);
    this.utilService.setCount(0);
  }
  startTimer() {
    this.startPause = !this.startPause;
    if (this.startPause == false) {
      this.startCount++
      this.listOftimeToDisplay.push("Started At" + new Date())
      this.interval = setInterval(() => {
        if (this.timeLeft1 > 0) {
          this.timeLeft1--;
        } else {
          this.timeLeft1 = 60;
        }
      }, 1000)
    } else if (this.startPause == true) {
     
      this.pausedArray.push(this.timeLeft1)
      this.pauseCount++
      this.listOftimeToDisplay.push("paused At" + new Date())
      this.pauseTimer();
    }
    let startPauseCount = {
      startCount: this.startCount,
      pauseCount: this.pauseCount
    }
    this.utilService.setTimerListItems(this.listOftimeToDisplay);
    this.utilService.setStartPauseCount(startPauseCount);
    this.utilService.setCount(this.timeLeft1);

  }
  EnterTimer(timeLeft: any) {
    this.timeLeft = timeLeft.value;
    this.timeLeft1 = this.timeLeft;
  }
  pauseTimer() {

    clearInterval(this.interval);
  }

  resetTimer() {
    let startPauseCount = {
      startCount: 0,
      pauseCount: 0
    }
    this.utilService.setTimerListItems(this.listOftimeToDisplay = []);
    this.utilService.setStartPauseCount(startPauseCount);
    this.utilService.setCount(this.timeLeft1 = 0);
    clearInterval(this.interval);
  }



}
