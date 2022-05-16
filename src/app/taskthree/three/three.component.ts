import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {
  @Input() timerDisplayList: any;
  constructor() { }

  ngOnInit(): void {
  }

}
