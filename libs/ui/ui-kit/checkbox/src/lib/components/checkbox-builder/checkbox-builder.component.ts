import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGroupInfo, InputStyle } from '@llp/models';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'llp-checkbox-builder',
  templateUrl: './checkbox-builder.component.html',
  styleUrls: ['./checkbox-builder.component.scss'],
})
export class CheckboxBuilderComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) showErrors!: boolean;

  checkedOptions: string[] = [];

  InputStyle = InputStyle;

  addOption(): void {
    (this.form.controls['answerOptions'] as FormGroup).addControl(
      uuidv4(),
      new FormControl('', [Validators.required]),
    );
  }

  deleteOption(formControlName: FormGroupInfo['formControlName']): void {
    this.checkedOptions = this.checkedOptions.filter(checkedOption => checkedOption !== formControlName);
    (this.form.controls['answerOptions'] as FormGroup).removeControl(formControlName);
  }

  trackByFn(index: number, formGroup: FormGroupInfo): string {
    return formGroup.formControlName;
  }

  get answerOptions(): FormGroup {
    return this.form.controls['answerOptions'] as FormGroup;
  }

  showAnswerOptions(): boolean {
    return !!Object.keys((this.form.controls['answerOptions'] as FormGroup).controls).length;
  }

  toggleOption(formControlName: string): void {
    if (this.isChecked(formControlName)) {
      this.checkedOptions = this.checkedOptions.filter(checkedOption => checkedOption !== formControlName);
    } else {
      this.checkedOptions.push(formControlName);
    }

    this.form.controls['correctAnswer'].setValue(this.checkedOptions);
  }

  isChecked(formControlName: string): boolean {
    return this.checkedOptions.some(checkedOption => checkedOption === formControlName);
  }
}
