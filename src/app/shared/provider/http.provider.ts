import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class HttpProvider {
  public baseUrl: string|null = null;
  public ticketKey: string|null = null;


  constructor(private http: HttpClient) {}


  public formatUrl(relativeUrl: string): string {
    if (!relativeUrl) {
      throw new Error('missing relativeUrl');
    }

    if (this.baseUrl) {
      return this.baseUrl + relativeUrl;
    }

    return relativeUrl;
  }

  public get<T>(relativeUrl: string, data?: any): Observable<T> {
    relativeUrl = this.formatUrl(relativeUrl);
    return this.request<T>(relativeUrl, 'Get', data, false);
  }

  public get2(relativeUrl: string) {
    relativeUrl = this.formatUrl(relativeUrl);
    return this.http.get(relativeUrl, {responseType : 'blob'});
  }

  public post<T>(
      relativeUrl: string, data: any, useRelativeUrl: boolean,
      formUrlEncoded: boolean = false): Observable<T> {
    if (useRelativeUrl) {
      relativeUrl = this.formatUrl(relativeUrl);
    }
    return this.request(relativeUrl, 'Post', data, formUrlEncoded);
  }

  public postFile<T>(relativeUrl: string, formData: FormData, options: any): Observable<T> {
    relativeUrl = this.formatUrl(relativeUrl);
    return this.http
        .post<any>(
            relativeUrl, formData, options)
        .pipe(map(res => <any>res));
  }

  public put<T>(relativeUrl: string, data?: any): Observable<T> {
    relativeUrl = this.formatUrl(relativeUrl);
    return this.request(relativeUrl, 'Put', data, false);
  }

  public patch<T>(relativeUrl: string, data: any): Observable<T> {
    relativeUrl = this.formatUrl(relativeUrl);
    return this.request(relativeUrl, 'Patch', data, false);
  }

  public delete<T>(relativeUrl: string, data: any): Observable<T> {
    relativeUrl = this.formatUrl(relativeUrl);
    return this.request(relativeUrl, 'Delete', data, false);
  }

  public head<T>(relativeUrl: string): Observable<T> {
    relativeUrl = this.formatUrl(relativeUrl);
    return this.request(relativeUrl, 'Head', null, false);
  }

  public request<T>(
      relativeUrl: string, method: string, data?: any,
      formatUrl: boolean = true): Observable<T> {
    if (formatUrl) {
      relativeUrl = this.formatUrl(relativeUrl);
    }
    return this.http
        .request(method, relativeUrl, {body: data, responseType: 'text'})
        .pipe(
            map(res => {
              if (!res) {
                return <any>res;
              }
              return <T>JSON.parse(res);
            }));
  }
}
