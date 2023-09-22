import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PasswordInputComponent } from './components/password-input/password-input.component';

@NgModule({
  imports: [CommonModule, FormsModule, MatIconModule],
  declarations: [PasswordInputComponent],
  exports: [PasswordInputComponent]
})
export class UiPasswordInputModule {}
