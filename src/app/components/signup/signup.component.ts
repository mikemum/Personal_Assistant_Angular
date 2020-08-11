import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  // signupUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private _userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.signupForm = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.signupForm.valueChanges.subscribe((data) => {
      // console.log({ data });
      // console.log(this.signupForm.valid)
    });
  }

  ngOnInit(): void {}

  onSignUp(): void {
    let { value } = this.signupForm;
    // console.log( {value} );
    this._userService
      .signUp(value)
      .subscribe((data) =>
        this.router.navigate(['/signin'], { relativeTo: this.route })
      );
  }
}
