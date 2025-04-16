import { TestBed } from '@angular/core/testing';

import { NotauthService } from './notauth.service';



describe('NotauthService', () => {
  let service: NotauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
