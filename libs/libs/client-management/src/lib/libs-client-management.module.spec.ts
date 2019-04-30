import { async, TestBed } from '@angular/core/testing';
import { LibsClientManagementModule } from './libs-client-management.module';

describe('LibsClientManagementModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LibsClientManagementModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LibsClientManagementModule).toBeDefined();
  });
});
