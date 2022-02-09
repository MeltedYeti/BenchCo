import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface IRequestOptions {
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  responseType?: any;
}

interface IAbstractDataService {
  GET(url: string, options: IRequestOptions): Observable<Object>;

  POST(url: string, data: any, options?: IRequestOptions): Observable<Object>;

  PUT(url: string, data: any, options?: IRequestOptions): Observable<Object>;

  DELETE(url: string, options?: IRequestOptions): Observable<Object>;
}


export abstract class AbstractDataService implements IAbstractDataService {
  readonly baseUrl: string;

  protected constructor(
    protected http: HttpClient,
  ) {
    this.baseUrl = environment.apiUrl;
  }

  protected getUrl(path: string = ''): string {
    return this.baseUrl + path;
  }

  public GET(url: string, options?: IRequestOptions): Observable<any> {
    return this.http.get(url, options);
  }

  public POST(url: string, data: any, options?: IRequestOptions): Observable<any> {
    return this.http.post(url, data, options);
  }

  public PUT(url: string, data: any, options?: IRequestOptions): Observable<any> {
    return this.http.put(url, data, options);
  }

  public DELETE(url: string, options?: IRequestOptions): Observable<any> {
    return this.http.delete(url, options);
  }

}
