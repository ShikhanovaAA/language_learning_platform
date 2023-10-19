import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGroupInfo, InputStyle } from '@llp/models';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'llp-radio-list-builder',
  templateUrl: './radio-list-builder.component.html',
  styleUrls: ['./radio-list-builder.component.scss'],
})
export class RadioListBilderComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) showErrors!: boolean;

  InputStyle = InputStyle;

  checkedControl!: string;

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
    if (this.checkedControl === formControlName) this.checkedControl = '';
  }

  setCorrectAnswer(formControlName: FormGroupInfo['formControlName']) {
    if (this.checkedControl) {
      this.answerOptions.controls[this.checkedControl].patchValue({
        isCorrectAnswer: false,
      });
    }

    this.answerOptions.controls[formControlName].patchValue({
      isCorrectAnswer: true,
    });

    this.checkedControl = formControlName;
  }

  get answerOptions() {
    return this.form.controls['answerOptions'] as FormGroup;
  }

  trackByFn(index: number, formGroup: FormGroupInfo) {
    return formGroup.formControlName;
  }
}
