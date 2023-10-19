import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { FormGroupInfo, InputStyle } from '@llp/models';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'llp-input-builder',
  templateUrl: './input-builder.component.html',
  styleUrls: ['./input-builder.component.scss'],
})
export class InputBuilderComponent implements OnInit {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) showErrors!: boolean;

  InputStyle = InputStyle;

  ngOnInit(): void {
    (this.form.controls['answerOptions'] as FormGroup).addControl(uuidv4(),
      new FormGroup({
        label: new FormControl('', [Validators.required]),
        isCorrectAnswer: new FormControl(false),
      }),
    );
  }

  get answerOptions(): FormGroup {
    return this.form.controls['answerOptions'] as FormGroup;
  }

  trackByFn(index: number, formGroup: FormGroupInfo): string {
    return formGroup.formControlName;
  }
}
