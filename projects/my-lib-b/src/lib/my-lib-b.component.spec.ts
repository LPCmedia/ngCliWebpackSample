import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibBComponent } from './my-lib-b.component';

describe('MyLibBComponent', () => {
  let component: MyLibBComponent;
  let fixture: ComponentFixture<MyLibBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLibBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
