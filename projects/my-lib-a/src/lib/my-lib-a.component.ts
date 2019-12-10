import { Component, OnInit } from '@angular/core';
import { MyLibBService } from '@my-scope/my-lib-b';

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

  constructor(private myLibBService: MyLibBService) { }

  ngOnInit() {
  }

}
