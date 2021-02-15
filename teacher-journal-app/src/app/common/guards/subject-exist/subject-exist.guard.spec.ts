import { TestBed, async, inject } from '@angular/core/testing';

import { SubjectExistGuard } from './subject-exist.guard';

describe('SubjectExistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectExistGuard]
    });
  });

  it('should ...', inject([SubjectExistGuard], (guard: SubjectExistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
