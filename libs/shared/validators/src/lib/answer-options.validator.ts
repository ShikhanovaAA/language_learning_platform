import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ControlType } from '@llp/models';

export function answerOptionsValidator(minNumberOfOptions: number, errorMessage?: string): ValidatorFn {
  const answerOptionsValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control as FormGroup;
    const controlType = formGroup.get('controlType')?.value;
    const answerOptions = Object.keys((formGroup.get('answerOptions') as FormGroup).controls).length;

    if (!controlType || controlType === ControlType.INPUT) return null;
    if (answerOptions >= minNumberOfOptions) return null;

    return {minControls: {message: errorMessage}};
  }

  return answerOptionsValidatorFn;
}
