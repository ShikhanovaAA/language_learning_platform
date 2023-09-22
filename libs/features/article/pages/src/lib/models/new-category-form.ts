import { FormControl } from '@angular/forms';

export interface NewCategoryForm {
  name: FormControl<string>;
  description: FormControl<string>;
}
