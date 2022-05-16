import { Component, OnInit } from '@angular/core';
import { UtillService } from 'src/app/services/utill.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  item: any;
  timeLeft: any = 0;
  timeLeft1: any = 0;
  interval: any;
  startPause: boolean = true;
  startCount: number = 0;
  pauseCount: number = 0;
  constructor(private utilService: UtillService) { }

  ngOnInit(): void {
    this.utilService.timeCount.subscribe(addedItem => {
      this.item = addedItem;
      this.startTimer(this.item)
    })
  }
  startTimer(item: any) {
    this.startPause = !this.startPause;
    if (this.startPause == false) {
      this.interval = setInterval(() => {
        if (this.item > 0) {
          this.item--;
        } else {
          this.item = 60;
        }
      }, 1000)
    } else if (this.startPause == true) {
      this.pauseCount++
      this.pauseTimer();
    }
  }
  pauseTimer() {
    clearInterval(this.interval);
  }

}
