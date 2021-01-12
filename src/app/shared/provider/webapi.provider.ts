import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

import {HttpProvider} from './http.provider';


@Injectable()
export class WebApiProvider extends HttpProvider {
  constructor(http: HttpClient) {
    super(http);
  }
}
