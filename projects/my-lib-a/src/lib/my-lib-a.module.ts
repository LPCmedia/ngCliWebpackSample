import { NgModule } from '@angular/core';
import { MyLibAComponent } from './my-lib-a.component';
import { MyLibBService } from '@my-scope/my-lib-b';



@NgModule({
  declarations: [MyLibAComponent],
  imports: [
  ],
  exports: [MyLibAComponent],
  providers: [MyLibBService]
})
export class MyLibAModule { }
