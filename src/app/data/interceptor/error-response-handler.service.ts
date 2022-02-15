import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ErrorResponseHandlerService implements HttpInterceptor {

  constructor(
    private _router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({
        error: (error) => {
          const path = `/error?status=${error.status}&msg=${error.message}`;
          this._router.navigateByUrl(path);
        }
      })
    );
  }
}
