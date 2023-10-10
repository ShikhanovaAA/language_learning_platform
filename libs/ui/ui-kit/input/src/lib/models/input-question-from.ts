import { FormControl } from '@angular/forms';

export interface InputQuestionForm {
  label: FormControl<string>;
  correctAnswer: FormControl<string>
}
