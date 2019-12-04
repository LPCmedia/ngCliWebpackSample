import { TestBed } from '@angular/core/testing';

import { MyLibAService } from './my-lib-a.service';

describe('MyLibAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLibAService = TestBed.get(MyLibAService);
    expect(service).toBeTruthy();
  });
});
