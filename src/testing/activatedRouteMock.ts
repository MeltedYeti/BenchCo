// export for convenience.
export { ActivatedRoute } from '@angular/router';

import { Type } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  convertToParamMap,
  Data,
  ParamMap,
  Params,
  Route,
  UrlSegment
} from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteMock implements ActivatedRoute {
  readonly children: ActivatedRoute[] = [];
  component: Type<any> | string | null = null;
  // @ts-ignore
  data: Observable<Data>;

  // @ts-ignore
  readonly firstChild: ActivatedRoute | null;
  // @ts-ignore
  fragment: Observable<string>;
  // @ts-ignore
  outlet: string | undefined;
  // @ts-ignore
  params: Observable<Params> | undefined;
  // @ts-ignore
  readonly parent: ActivatedRoute | null;
  // @ts-ignore
  readonly pathFromRoot: ActivatedRoute[];
  // @ts-ignore
  readonly queryParamMap: Observable<ParamMap>;
  // @ts-ignore
  queryParams: Observable<Params>;
  // @ts-ignore
  readonly root: ActivatedRoute;
  // @ts-ignore
  readonly routeConfig: Route | null;
  /** The mock-model paramMap observable */
           // @ts-ignore
  snapshot: ActivatedRouteSnapshot;
  // @ts-ignore
  url: Observable<UrlSegment[]>;
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  private subject = new ReplaySubject<ParamMap>();
  readonly paramMap = this.subject.asObservable();

  toString(): string {
    return '';
  }


  constructor(initialParams?: Params, snapshot?: ActivatedRouteSnapshot) {
    if (initialParams) {
      this.setParamMap(initialParams);
    }

    if (snapshot) {
      this.snapshot = snapshot;
    }
  }

  /** Set the paramMap observables's next value */
  setParamMap(params: Params) {
    this.subject.next(convertToParamMap(params));
  }
}
