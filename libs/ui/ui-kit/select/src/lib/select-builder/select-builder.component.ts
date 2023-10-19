import { Component, Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGroupInfo, InputStyle } from '@llp/models';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'llp-select-builder',
  templateUrl: './select-builder.component.html',
  styleUrls: ['./select-builder.component.scss'],
})
export class SelectBuilderComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) showErrors!: boolean;

  InputStyle = InputStyle;

  selectedControl!: string;

  addOption() {
    (this.form.controls['answerOptions'] as FormGroup).addControl(uuidv4(),
      new FormGroup({
        label: new FormControl('', [Validators.required]),
        isCorrectAnswer: new FormControl(false),
      }),
    );
  }

  deleteOption(formControlName: FormGroupInfo['formControlName']) {
    (this.form.controls['answerOptions'] as FormGroup).removeControl(formControlName);
    if (this.selectedControl === formControlName) this.selectedControl = '';
  }

  setCorrectAnswer(formControlName: FormGroupInfo['formControlName']) {
    if (this.selectedControl) {
      this.answerOptions.controls[this.selectedControl].patchValue({
        isCorrectAnswer: false,
      });
    }

    this.answerOptions.controls[formControlName].patchValue({
      isCorrectAnswer: true,
    });

    this.selectedControl = formControlName;
  }

  get answerOptions() {
    return this.form.controls['answerOptions'] as FormGroup;
  }

  trackByFn(index: number, formGroup: FormGroupInfo) {
    return formGroup.formControlName;
  }
}
