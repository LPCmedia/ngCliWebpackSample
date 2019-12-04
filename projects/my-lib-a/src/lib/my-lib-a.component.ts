import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib-a',
  template: `
    <p>
      my-lib-a works!
    </p>
  `,
  styles: []
})
export class MyLibAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
