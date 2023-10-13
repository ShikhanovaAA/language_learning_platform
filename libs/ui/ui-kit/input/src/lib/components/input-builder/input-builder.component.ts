import { Component, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { InputStyle } from '@llp/models';

@Component({
  selector: 'llp-input-builder',
  templateUrl: './input-builder.component.html',
  styleUrls: ['./input-builder.component.scss'],
})
export class InputBuilderComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) showErrors!: boolean;

  InputStyle = InputStyle;
}
