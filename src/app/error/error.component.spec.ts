import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ActivatedRouteMock } from '../../testing';

describe('ErrorComponent', () => {
  let sut: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorComponent],
      providers: [
        { provide: ActivatedRoute, useValue: new ActivatedRouteMock() }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    activatedRoute = TestBed.inject(ActivatedRoute);
    activatedRoute.snapshot = new ActivatedRouteSnapshot();
    activatedRoute.snapshot.queryParams = { code: '404', msg: 'Not found.' };
    fixture = TestBed.createComponent(ErrorComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });
});
