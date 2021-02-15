import { TestBed } from '@angular/core/testing';

import { SaveChangesDialogService } from './save-changes-dialog.service';

describe('SaveChangesDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveChangesDialogService = TestBed.get(SaveChangesDialogService);
    expect(service).toBeTruthy();
  });
});
