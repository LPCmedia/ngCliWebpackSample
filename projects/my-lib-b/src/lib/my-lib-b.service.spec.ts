import { TestBed } from '@angular/core/testing';

import { MyLibBService } from './my-lib-b.service';

describe('MyLibBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLibBService = TestBed.get(MyLibBService);
    expect(service).toBeTruthy();
  });
});
