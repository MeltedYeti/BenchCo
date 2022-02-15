import { TestBed } from '@angular/core/testing';

import { ErrorResponseHandlerService } from './error-response-handler.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorResponseHandlerService', () => {
  let sut: ErrorResponseHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ErrorResponseHandlerService
      ],
      imports: [
        RouterTestingModule
      ]
    });
    sut = TestBed.inject(ErrorResponseHandlerService);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });
});
