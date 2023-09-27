import { FormControl } from '@angular/forms';

export interface NewArticleForm {
  title: FormControl<string>;
  text: FormControl<string>;
  categoryId: FormControl<string>;
}
