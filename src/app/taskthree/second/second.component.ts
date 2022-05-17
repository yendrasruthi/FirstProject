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
  }



  EnterTimer() {
    this.enterValue.emit(this.timeLeft1)
  }
  resetTimer() {
    this.timeLeft1 = 0;
    this.clearTimer.emit()

  }
  constructor() { }

  ngOnInit(): void {
  }

}
