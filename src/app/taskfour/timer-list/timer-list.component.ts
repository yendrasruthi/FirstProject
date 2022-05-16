import { Component, OnInit } from '@angular/core';
import { UtillService } from 'src/app/services/utill.service';

@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.scss']
})
export class TimerListComponent implements OnInit {
  timerList: any;
  constructor(private utilService: UtillService) { }

  ngOnInit(): void {
    this.utilService.timerListItems.subscribe(timerListItems => {
      this.timerList = timerListItems;
    })
  }

}
