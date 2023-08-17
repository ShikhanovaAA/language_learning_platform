export enum ValidationErrorKey {
  Email = 'email',
  Password = 'password',
  Required = 'required'
}

export type ValidationErrorMapper = {
  [T in ValidationErrorKey]: string;
};

export const mapValidationErrorToMessage: ValidationErrorMapper = {
  [ValidationErrorKey.Email]: 'The email field is not in the correct format',
  [ValidationErrorKey.Password]: 'Passwords must be at least 8 characters, including a number, an uppercase letter, and a lowercase letter',
  [ValidationErrorKey.Required]: 'This field is required',
};
