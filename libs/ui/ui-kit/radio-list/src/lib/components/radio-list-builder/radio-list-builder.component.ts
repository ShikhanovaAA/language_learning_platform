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

  addOption() {
    (this.form.controls['answerOptions'] as FormGroup).addControl(uuidv4(),
      new FormControl('', [Validators.required]),
    );
  }

  deleteOption(formControlName: FormGroupInfo['formControlName']) {
    (this.form.controls['answerOptions'] as FormGroup).removeControl(formControlName);

    if (this.form.controls['correctAnswer'].value !== formControlName) return;
    this.form.controls['correctAnswer'].setValue('');
  }

  setCorrectAnswer(formControlName: FormGroupInfo['formControlName']) {
    this.form.controls['correctAnswer'].setValue(formControlName);
  }

  get answerOptions() {
    return this.form.controls['answerOptions'] as FormGroup;
  }

  get correctAnswer() {
    return this.form.controls['correctAnswer'].value;
  }

  trackByFn(index: number, formGroup: FormGroupInfo) {
    return formGroup.formControlName;
  }
}
