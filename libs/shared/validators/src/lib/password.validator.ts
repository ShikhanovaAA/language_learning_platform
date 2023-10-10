import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PASSWORD_REGEXP } from './misc/conts';

export function passwordValidator(errorMessage?: string): ValidatorFn {
  const passwordValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const validationErrors = PASSWORD_REGEXP.test(control.value) ? null : {password: {message: errorMessage}};
    return validationErrors;
  }

  return passwordValidatorFn;
}
