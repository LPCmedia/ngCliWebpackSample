import { NgModule } from '@angular/core';
import { MyLibBComponent } from './my-lib-b.component';
import { MyLibAComponent } from '@my-scope/my-lib-a';

@NgModule({
  declarations: [MyLibBComponent, MyLibAComponent],
  imports: [
  ],
  exports: [MyLibBComponent]
})
export class MyLibBModule { }
