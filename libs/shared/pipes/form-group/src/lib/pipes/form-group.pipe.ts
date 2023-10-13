import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupInfo } from '@llp/models';

@Pipe({
  name: 'formGroup',
  pure: false,
})
export class FormGroupPipe implements PipeTransform {
  transform(formGroup: FormGroup): FormGroupInfo[] {
    const controlsArray = Object.entries(formGroup.controls).map(([key, value]) => ({
      formControlName: key,
      formControl: value as FormGroup,
    }));

    return controlsArray;
  }
}
