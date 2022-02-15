import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AbstractDataService, IRequestOptions } from './abstract-data.service';
import { HttpMethod } from '../model/enum';
import { Observable } from 'rxjs';

@Injectable()
class TestService extends AbstractDataService {

  constructor(
    http: HttpClient,
  ) {
    super(http);
  }

  exposeGetUrl(path: string): string {
    return this.getUrl(path);
  }

  public override GET(url: string, options?: IRequestOptions): Observable<Object> {
    return super.GET(url, options);
  }

  public override POST(url: string, data: any, options?: IRequestOptions): Observable<Object> {
    return super.POST(url, data, options);
  }

  public override PUT(url: string, data: any, options?: IRequestOptions): Observable<Object> {
    return super.PUT(url, data, options);
  }

  public override DELETE(url: string, options?: IRequestOptions): Observable<Object> {
    return super.DELETE(url, options);
  }
}

describe('AbstractDataService', () => {
  let sut: TestService;
  let http: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestService,
      ],
      imports: [HttpClientTestingModule]
    });

    sut = TestBed.inject(TestService);
    // config = TestBed.inject(EnvironmentConfiguration) as jasmine.SpyObj<EnvironmentConfiguration>;
    http = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  function getRequestOptions(): IRequestOptions {
    return {
      params: {
        ['key']: 'value'
      }
    };
  }

  describe('GET', () => {
    it('should call http.get with the url', () => {
      const data = { id: 1, name: 'George' };
      sut.GET('/test').subscribe();
      const request = httpTestingController.expectOne('/test');
      expect(request.request.method).toEqual(HttpMethod.GET);
      request.flush(data);
      httpTestingController.verify();
    });

    it('should pass options to the get() method', () => {
      const data = {};

      sut.GET('/options', getRequestOptions()).subscribe();

      const request = httpTestingController.expectOne('/options?key=value');
      expect(request.request.method).toEqual(HttpMethod.GET);
      request.flush(data);
      httpTestingController.verify();
    });
  });

  describe('POST', () => {
    it('should call HttpClient.post with expected params', () => {
      const data = { id: 1 };
      sut.POST('/post', data, getRequestOptions()).subscribe();
      const request = httpTestingController.expectOne('/post?key=value');
      expect(request.request.body).toEqual(data);
      expect(request.request.method).toEqual(HttpMethod.POST);
      request.flush(data);
      httpTestingController.verify();
    });
  });

  describe('PUT', () => {
    it('should call HttpClient.post with expected params', () => {
      const data = { id: 1 };
      sut.PUT('/put', data, getRequestOptions()).subscribe();
      const request = httpTestingController.expectOne('/put?key=value');
      expect(request.request.body).toEqual(data);
      expect(request.request.method).toEqual(HttpMethod.PUT);
      request.flush(data);
      httpTestingController.verify();
    });
  });

  describe('DELETE', () => {
    it('should should call HttpClient.delete with expected params', () => {
      const options = getRequestOptions();
      options.headers = {
        ['header-key']: 'value'
      };
      sut.DELETE('/delete', options).subscribe();
      const req = httpTestingController.expectOne('/delete?key=value');
      expect(req.request.method).toEqual(HttpMethod.DELETE);

      expect(req.request.headers.get('header-key')).toEqual('value');
      req.flush({});
      httpTestingController.verify();
    });
  });

  describe('getUrl(path: string = \'\')', () => {
    let getSpy: jasmine.Spy;

    beforeEach(() => {
      getSpy = spyOn(http, 'get').and.callThrough();
    });

    it('should concat the path variable onto the configuration base url', () => {
      const expected = 'https://resttest.bench.co/test';
      expect(sut.exposeGetUrl('/test')).toEqual(expected);
    });
  });
});
