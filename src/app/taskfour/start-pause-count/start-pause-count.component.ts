import { Component, OnInit } from '@angular/core';
import { UtillService } from 'src/app/services/utill.service';

@Component({
  selector: 'app-start-pause-count',
  templateUrl: './start-pause-count.component.html',
  styleUrls: ['./start-pause-count.component.scss']
})
export class StartPauseCountComponent implements OnInit {
  countsList: any = [];
  constructor(private utilService: UtillService) { }

  ngOnInit(): void {
    this.utilService.startPauseCount.subscribe(timerListItems => {
      console.log(timerListItems)
      this.countsList = timerListItems;
    })
  }

}
