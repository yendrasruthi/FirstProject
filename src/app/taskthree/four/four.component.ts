import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})
export class FourComponent implements OnInit {
  @Input() startPauseCountr: any;
  constructor() { }

  ngOnInit(): void {
  }

}
