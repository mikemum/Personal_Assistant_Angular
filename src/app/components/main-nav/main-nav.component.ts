import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  user = null;
  userProfile = null;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _userService: UserService,
    private router: Router
  ) {
    this.user = this._userService.checkUser().subscribe((u) => {
      this.user = u;
      this.userProfile = u;
      console.log(this.user);
    });
  }

 
  logOut(): void {
    console.log('inside logOut...');
    this._userService.logOut();
    this._userService.getUser()?.subscribe((u) => {
      this.user = u;
      console.log(this.user);
      this.router.navigate(['/login']);
    });
  }

  checkUser(): Observable<any>{
    return this._userService.checkUser();
  }
}
