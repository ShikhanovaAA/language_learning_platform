import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditableQuestionFields, InputStyle } from '@llp/models';
import { InputQuestionForm } from '../../models/input-question-from';

@Component({
  selector: 'llp-input-builder',
  templateUrl: './input-builder.component.html',
  styleUrls: ['./input-builder.component.scss'],
})
export class InputBuilderComponent implements OnInit {
  @Input() label?: string;

  @Output() inputSettingsUpdated = new EventEmitter<EditableQuestionFields>();

  InputStyle = InputStyle;

  inputQuestionForm = new FormGroup<InputQuestionForm>({
    label: new FormControl(this.label || '', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(5)],
    }),
    correctAnswer: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(1)],
    }),
  });

  ngOnInit(): void {
    this.inputQuestionForm.valueChanges.subscribe(() => this.updateQuestionSettings());
  }

  updateQuestionSettings() {
    const { label = '', correctAnswer } = this.inputQuestionForm.value;

    this.inputSettingsUpdated.emit({
      label,
      correctAnswer,
      answerOptions: undefined,
    });
  }
}
