import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IpgSessionResponse } from '../model/ipg-session.response';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { WebApiProvider } from '../provider';

@Injectable({ providedIn: 'root' })
export class ApiCoreService {

    constructor(private webApiProvider: WebApiProvider) { }

    getIpgSession(merchantRef: string, amount: string): Observable<any> {
        return this.webApiProvider.get<IpgSessionResponse>(environment.apiBaseUrl + '/threecpay/initialise/' + merchantRef + '/' + amount);
    }

    submitPay(merchantRef: any, amount: any): Observable<any> {
        return this.webApiProvider.get(environment.apiBaseUrl + '/threecpay/pay/' + merchantRef + '/' + amount);
    }

    payWithMerchantRef(merchantRef: any, amount: any) {
        return this.webApiProvider.get(environment.apiBaseUrl + '/threecpay/pay/' + merchantRef + '/' + amount);
    }

    payWithToken(merchantRef: any, amount: number, token: string) {
        return this.webApiProvider.get(environment.apiBaseUrl + '/threecpay/payWithToken/' + merchantRef + '/' + amount + "?token=" + token);
    }


}