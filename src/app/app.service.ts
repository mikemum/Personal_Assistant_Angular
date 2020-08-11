import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  signInUrl: string = `${environment.actionsBaseUrl}/api/v1/users/login`;
  user: any;
  constructor(private _http: HttpClient) {}

  getUser(): any {
    return this.user;
  }

  signIn(obj): Observable<any> {
    return this._http.post(this.signInUrl, obj).pipe(
      tap((u) => {
        this.user = u;
      })
    );
  }

  logOut(): void {
    this.user = null;
  }
}
