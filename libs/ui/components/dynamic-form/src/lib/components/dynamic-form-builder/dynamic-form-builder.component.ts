import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { requiredOptions, controlOptions, FormGroupInfo } from '@llp/models';

@Component({
  selector: 'llp-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.scss'],
})
export class DynamicFormBuilderComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) showErrors!: boolean;

  @Output() deleteFormControl = new EventEmitter<string>();

  requiredOptions = requiredOptions;
  controlOptions = controlOptions;

  trackByFn(index: number, question: FormGroupInfo) {
    return question.formControlName;
  }

  deleteQuestion(formControlName: string) {
    this.deleteFormControl.emit(formControlName);
  }
}
