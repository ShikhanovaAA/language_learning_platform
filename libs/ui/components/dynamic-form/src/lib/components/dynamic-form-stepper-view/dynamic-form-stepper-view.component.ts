import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlView, Question, FormView, FormAnswer } from '@llp/models';

@Component({
  selector: 'llp-dynamic-form-stepper-view',
  templateUrl: './dynamic-form-stepper-view.component.html',
  styleUrls: ['./dynamic-form-stepper-view.component.scss'],
})
export class DynamicFormStepperViewComponent {
  @Input() questions: Question[] = [];
  @Input() submitButtonText = 'Save answers';
  @Input() stepperOrientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() controlView: ControlView = ControlView.Quiz;
  @Input() form!: FormGroup;

  @Output() submitForm = new EventEmitter<FormAnswer>();

  FormView = FormView;
  ControlView = ControlView;

  submit() {
    this.submitForm.emit(this.form.value);
  }

  trackByFn(index: number, question: Question) {
    return question.key;
  }
}
