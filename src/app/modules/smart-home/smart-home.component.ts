import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-smart-home',
  templateUrl: './smart-home.component.html',
  styles: [],
})
export class SmartHomeComponent implements OnInit {
  user: any = null;
  constructor(private _userService: UserService) {
    this.user = this._userService.getUser();
  }

  ngOnInit(): void {}
}
