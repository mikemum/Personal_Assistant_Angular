import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'personal-assistant';
  // user: Object = null;

  constructor(private _userService: UserService) {
    // console.log('inside app component...');
    // let foundUser = this._userService.getUser();
    let foundToken = this._userService.getToken();
      console.log({ foundToken });
    let foundRefreshToken = localStorage.getItem('refreshToken');
    console.log({ foundRefreshToken });
    let foundUser = JSON.parse(localStorage.getItem('user'));
    console.log({ foundUser });
    if (!foundToken && foundRefreshToken && foundUser) {
      // let userForRefreshToken = JSON.parse(localStorage.getItem('refreshToken'));
      // console.log({ userForRefreshToken });
      this._userService
        .getTokenUsingRefreshToken(foundUser)
        .subscribe((user) => {
          // console.log({ user });
        });
    }
  }

  checkUser(): Observable<any> {
    return this._userService.checkUser();
  }
}
