import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function correctAnswerValidator(): ValidatorFn {
  const correctAnswerValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const validationErrors = control.value.length ? null : {required: {message: 'Correct answer is required'}};
    return validationErrors;
  }

  return correctAnswerValidatorFn;
}
