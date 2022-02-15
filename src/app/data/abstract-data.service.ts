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

export abstract class AbstractDataService {
  readonly baseUrl: string;

  protected constructor(
    protected http: HttpClient,
  ) {
    this.baseUrl = environment.apiUrl;
  }

  protected getUrl(path: string = ''): string {
    return this.baseUrl + path;
  }

  protected GET(url: string, options?: IRequestOptions): Observable<any> {
    return this.http.get(url, options);
  }

  protected POST(url: string, data: any, options?: IRequestOptions): Observable<any> {
    return this.http.post(url, data, options);
  }

  protected PUT(url: string, data: any, options?: IRequestOptions): Observable<any> {
    return this.http.put(url, data, options);
  }

  protected DELETE(url: string, options?: IRequestOptions): Observable<any> {
    return this.http.delete(url, options);
  }

}
