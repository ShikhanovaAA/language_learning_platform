import { ValidationErrors } from '@angular/forms';

export enum ValidationErrorKey {
  Email = 'email',
  Password = 'password',
  Required = 'required',
  Minlength = 'minlength'
}

export type ValidationErrorMapper = {
  [T in ValidationErrorKey]: string;
};

export const mapValidationErrorToMessage: ValidationErrorMapper = {
  [ValidationErrorKey.Email]: 'The email field is not in the correct format',
  [ValidationErrorKey.Password]: 'Passwords must be at least 8 characters, including a number, an uppercase letter, and a lowercase letter',
  [ValidationErrorKey.Required]: 'This field is required',
  [ValidationErrorKey.Minlength]: 'This field must be at least',
};

export const getErrorMessage = (errorName: ValidationErrorKey, error: ValidationErrors): string => {
  if (errorName !== ValidationErrorKey.Minlength) return mapValidationErrorToMessage[errorName];

  return `${mapValidationErrorToMessage[errorName]} ${error['requiredLength']} characters long (now ${error['actualLength']})`;
}
