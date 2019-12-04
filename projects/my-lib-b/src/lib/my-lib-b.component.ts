import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib-b',
  template: `
    <p>
      my-lib-b works!
    </p>
  `,
  styles: []
})
export class MyLibBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
