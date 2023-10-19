import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlView, Question, FormView, FormAnswer } from '@llp/models';

@Component({
  selector: 'llp-dynamic-form-list-view',
  templateUrl: './dynamic-form-list-view.component.html',
  styleUrls: ['./dynamic-form-list-view.component.scss'],
})
export class DynamicFormListViewComponent {
  @Input() questions: Question[] = [];
  @Input() form!: FormGroup;
  @Input() submitButtonText = 'Save answers';

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
