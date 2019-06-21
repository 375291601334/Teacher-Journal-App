import { TestBed, async, inject } from '@angular/core/testing';

import { StudentsGuard } from './students.guard';

describe('StudentsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsGuard]
    });
  });

  it('should ...', inject([StudentsGuard], (guard: StudentsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
