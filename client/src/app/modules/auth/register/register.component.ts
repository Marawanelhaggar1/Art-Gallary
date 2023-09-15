import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/auth/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  user!: User;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: UserService,
    private _cookie: CookieService
  ) {
    this.registerForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.register();
    } else {
      alert('please enter a valid registration');
    }
  }

  register() {
    this._authService.register(this.registerForm.value).subscribe({
      next: (res) => {
        this.user = res;
        console.log(res);
        this._cookie.set('user', JSON.stringify(res));
      },

      error: (err) => {
        console.log(err);
      },
    });
  }
}
