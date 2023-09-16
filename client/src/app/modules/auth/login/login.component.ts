import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/auth/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = new FormControl(' ', [Validators.required, Validators.email]);
  password = new FormControl(' ', [Validators.required]);
  loginForm: FormGroup;
  hide = true;
  user!: User;

  constructor(
    private _authService: UserService,
    private _formBuilder: FormBuilder,
    private _cookie: CookieService,
    private _router: Router,
    private _snack: MatSnackBar
  ) {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.login();
    } else {
      alert('wrong credentials');
    }
  }
  getEmailError() {
    if (this.email.hasError('required')) {
      return 'you must enter a valid email';
    }
    return this.email.hasError('email') ? 'not a valid email' : ' ';
  }

  getPasswordError() {
    return 'wrong password';
  }

  login() {
    this._authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.user = res;
        this._cookie.set('user', JSON.stringify(res));
        this.reloadComponent();

        console.log(this.user);
      },
      error: (err) => {
        console.log(err);
        this._snack.open(err.error.message, 'X', { duration: 4000 });
      },
    });
  }

  reloadComponent() {
    window.location.reload();
    this._router.navigate(['/']);
  }
}
