import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ControlType, NewAnswerOption } from '@llp/models';

export function hasCorrectAnswerValidator(errorMessage?: string): ValidatorFn {
  const hasCorrectAnswerValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control as FormGroup;
    const controlType = formGroup.get('controlType')?.value;

    const answerOptions = Object.values((formGroup.get('answerOptions') as FormGroup).value) as NewAnswerOption[];
    const hasCorrectAnswer = answerOptions.some(value => value.isCorrectAnswer);

    if (!controlType || controlType === ControlType.INPUT) return null;
    if (hasCorrectAnswer) return null;

    return {correctAnswer: {message: errorMessage || 'Correct answer is required'}};
  }

  return hasCorrectAnswerValidatorFn;
}
