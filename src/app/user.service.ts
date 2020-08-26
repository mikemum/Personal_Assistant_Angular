import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string;
  user: any;
  refreshToken: string;
  token: string;

  constructor(private _http: HttpClient) {
    console.log('inside user service...', environment.actionsBaseUrl);
    this.baseUrl = `${environment.actionsBaseUrl}/api/v1/users`;
    console.log('inside user service...', this.baseUrl);
  }

  getToken(): any {
    return this.token;
  }

  getUser(): any {
    return this.user ? this.user : JSON.parse(localStorage.getItem('user'));
  }

  checkUser(): Observable<any> {
    let fondUserFromLocalStorage = localStorage.getItem('user');
    // console.log({fondUserFromLocalStorage})
    let loggedInUser = JSON.parse(fondUserFromLocalStorage);
    return of(loggedInUser);
  }

  signIn(obj): Observable<any> {
    console.log('inside signIn signInservice ...');
    return this._http.post(this.baseUrl + '/login', obj).pipe(
      tap((res) => {
        this.user = res.user;
        this.token = res.user.token;
        let { refreshToken } = res.user;
        console.log({ refreshToken });
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('user', res.user);
      })
    );
  }

  getTokenUsingRefreshToken(user): Observable<any> {
    console.log('inside getTokenUsingRefreshToken ...', user);

    let userForRefreshToken = localStorage.getItem('refreshToken');
    console.log({ userForRefreshToken });
    return this._http
      .post(this.baseUrl + '/token', {
        refreshToken: userForRefreshToken,
        email: user.email,
      })
      .pipe(
        tap((res) => {
          console.log({ res });
          this.token = res.token;
          console.log(this.user);
          localStorage.setItem('refreshToken', res.token);
        })
      );
  }

  signUp(obj): Observable<any> {
    console.log('baseurl: ', this.baseUrl);
    return this._http.post(this.baseUrl + '/signup', obj).pipe(
      tap((u) => {
        // this.user = u.result;
        console.log({ u });
      })
    );
  }

  logOut(): Observable<any> {
    console.log('inside logout...');
    this.user = null;
    localStorage.setItem('user', null);
    localStorage.setItem('refreshToken', null);
    return of(true);
  }
}
