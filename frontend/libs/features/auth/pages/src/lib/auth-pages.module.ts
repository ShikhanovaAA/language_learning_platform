import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { UiInputModule } from '@llp/ui/input';
import { UiFormFieldModule } from '@llp/ui/form-field';
import { UiButtonModule } from '@llp/ui/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthDataAccessModule } from '@llp/features/auth/data-access';
import { AuthStateModule } from '@llp/features/auth/state';
import { FormControlErrorsDirectiveModule } from '@llp/shared/directives/form-control-errors';
import { UiPasswordInputModule } from '@llp/ui/password-input';
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
    AuthDataAccessModule,
    AuthStateModule,
    FormControlErrorsDirectiveModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
  ],
})
export class AuthPagesModule {}
