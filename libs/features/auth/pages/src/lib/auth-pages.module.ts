import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { UiInputModule } from '@llp/ui/ui-kit/input';
import { UiFormFieldModule } from '@llp/ui/ui-kit/form-field';
import { UiButtonModule } from '@llp/ui/ui-kit/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthStateModule } from '@llp/features/auth/state';
import { FormControlErrorsDirectiveModule } from '@llp/shared/directives/form-control-errors';
import { UiPasswordInputModule } from '@llp/ui/ui-kit/password-input';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    UiInputModule,
    UiFormFieldModule,
    UiButtonModule,
    UiPasswordInputModule,
    ReactiveFormsModule,
    AuthStateModule,
    FormControlErrorsDirectiveModule,
  ],
  declarations: [LoginComponent, RegisterComponent, AuthLayoutComponent],
})
export class AuthPagesModule {}
