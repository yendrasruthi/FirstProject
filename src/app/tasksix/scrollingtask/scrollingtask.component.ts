import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollingtask',
  templateUrl: './scrollingtask.component.html',
  styleUrls: ['./scrollingtask.component.scss']
})
export class ScrollingtaskComponent implements OnInit {

  // @HostListener('window:scroll', ['$event'])
  @HostListener("window:scroll", [])
  onScroll(): void {
    console.log("je;")
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // you're at the bottom of the page
      console.log("hello")
    }
  }
  items = Array.from({ length: 10 }).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit(): void {
  }
  nextBatch($event: any) {
    // console.log("hello")
    this.items = Array.from({ length: 10 }).map((_, i) => `Item #${i}`);
  }


  click() {
    this.items = this.items.concat(Array.from({ length: 10 }).map((_, i) => `Item #${i}`));

  }

  buttonClick(i: number) {
    console.log(i)
    if (i % 10 === 0) {
      alert("click Value is" + i)
    } else {
      // console.log(i)

    }
  }
}
