import { async, TestBed } from '@angular/core/testing';
import { ClientManagementModule } from './client-management.module';

describe('ClientManagementModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientManagementModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ClientManagementModule).toBeDefined();
  });
});
