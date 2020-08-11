import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  user = null;
  signinError: string;

  constructor(
    private formBuilder: FormBuilder,
    private _userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['mwoldemedihin@mum.edu', [Validators.required, Validators.email]],
      password: ['123', [Validators.required]],
    });

    this.loginForm.valueChanges.subscribe((data) => console.log({ data }));
  }

  ngOnInit(): void {}

  signIn(): void {
    console.log('inside signIn component ...');
    this._userService.signIn(this.loginForm.value).subscribe((res) => {
      this.user = res.user;
      // saving referesh token to local storage
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/'])
    },
      (error ) => {
        this.signinError = error.message;
      }
    );
  }
}
