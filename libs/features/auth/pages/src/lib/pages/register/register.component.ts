import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewUser } from '@llp/models';
import { validatePassword } from '@llp/shared/validators';
import { AuthFacade } from '@llp/features/auth/state';
import { RegisterForm } from '../../models/register-form';

@Component({
  selector: 'llp-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.scss',
    '../../shared-styles/auth-form.styles.scss',
  ],
})
export class RegisterComponent {
  registerForm = new FormGroup<RegisterForm>({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
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

  registerUser() {
    const { username, email, password } = this.registerForm.value;
    if (!this.registerForm.valid || !email || !password || !username) return;

    const newUser: NewUser = {
      username,
      email,
      password
    };

    this.authFacade.registerUser(newUser);
  }
}
