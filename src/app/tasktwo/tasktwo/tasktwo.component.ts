import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasktwo',
  templateUrl: './tasktwo.component.html',
  styleUrls: ['./tasktwo.component.scss']
})
export class TasktwoComponent implements OnInit {

  prodectList: any;
  objExp: any = 'col-3';
  constructor() { }
  display(i: any) {
    return new Array(i);
  }
  fourDisplay() {
    this.objExp = 'col-3';
  }
  twoDisplay() {
    this.objExp = 'col-6';
  }
  ngOnInit() {
    this.display(40);
  }

}
