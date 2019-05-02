import { async, TestBed } from '@angular/core/testing';
import { ClientAcceptancesModule } from './client-acceptances.module';

describe('ClientAcceptancesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientAcceptancesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ClientAcceptancesModule).toBeDefined();
  });
});
