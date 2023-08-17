import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validatePassword } from '@llp/shared/validators';
import { LabelPosition, LoginPayload } from '@llp/model';
import { AuthFacade } from '@llp/features/auth/state';
import { LoginForm } from '../../models/login-form';

@Component({
  selector: 'llp-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../../shared-styles/auth-form.styles.scss',
  ],
})
export class LoginComponent {
  LabelPosition = LabelPosition;

  loginForm = new FormGroup<LoginForm>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, validatePassword()]
    }),
  });

  constructor(private authFacade: AuthFacade) {}

  loginUser() {
    const { email, password } = this.loginForm.value;
    if (!this.loginForm.valid || !email || !password) return;

    const user: LoginPayload = {
      email,
      password
    };

    this.authFacade.authenticateUser(user);
  }
}
