import { TestBed, async, inject } from '@angular/core/testing';

import { StudentExistGuard } from './student-exist.guard';

describe('StudentExistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentExistGuard]
    });
  });

  it('should ...', inject([StudentExistGuard], (guard: StudentExistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
