import { Component, Input } from '@angular/core';
import { LabelPosition } from '@llp/models';

@Component({
  selector: 'llp-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  @Input({ required: true })
  label!: string;

  @Input()
  labelPosition: LabelPosition = LabelPosition.Top;
}
