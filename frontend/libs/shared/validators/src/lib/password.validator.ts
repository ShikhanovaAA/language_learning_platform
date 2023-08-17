import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PASSWORD_REGEXP } from './misc/conts';

export function validatePassword(errorMessage?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return PASSWORD_REGEXP.test(control.value) ? null : {password: {message: errorMessage}};
  }
}
