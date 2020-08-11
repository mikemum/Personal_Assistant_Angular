import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class CovidService {
  covidBaseUrl: string;
  token: string;

  constructor(private _http: HttpClient) {
    console.log('inside covidservice constructor...', environment);
    this.covidBaseUrl = `${environment.actionsBaseUrl}/api/v1/covid`;
  }

  getStats(): Observable<any> {
    return this._http.get(`${this.covidBaseUrl}/stats`);
  }
  getNews(): Observable<any> {
    return this._http.get(`${this.covidBaseUrl}/news`);
  }
  getTweets(): Observable<any> {
    return this._http.get(`${this.covidBaseUrl}/tweeter`);
  }
}
