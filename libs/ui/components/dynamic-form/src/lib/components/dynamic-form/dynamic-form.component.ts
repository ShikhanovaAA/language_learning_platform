import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlView, LabelPosition, Question, FormView, FormAnswer } from '@llp/models';
import { FormQuestionService } from '../../services/form-question.service';

@Component({
  selector: 'llp-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: Question[] = [];
  @Input() labelPosition!: LabelPosition;
  @Input() formView: FormView = FormView.Stepper;
  @Input() submitButtonText = 'Save answers';
  @Input() stepperOrientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() controlView: ControlView = ControlView.Quiz;

  @Output() submitForm = new EventEmitter<FormAnswer>();

  form!: FormGroup;

  FormView = FormView;
  ControlView = ControlView;

  constructor(private formQuestionService: FormQuestionService) {}

  ngOnInit() {
    this.form = this.formQuestionService.mapQuestionsToFormGroup(this.questions as Question[]);
  }

  submit() {
    if (this.form.invalid) return;

    this.submitForm.emit(this.form.value);
  }

  trackByFn(index: number, question: Question) {
    return question.key;
  }
}
