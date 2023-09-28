import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LabelPosition, Question } from '@llp/models';
import { FormQuestionService } from '../../services/form-question.service';

@Component({
  selector: 'llp-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  @Input() questions: Question[] = [];
  @Input() labelPosition!: LabelPosition;

  @Output() submitForm = new EventEmitter();
  form!: FormGroup;

  constructor(private formQuestionService: FormQuestionService) {}

  ngOnInit() {
    this.form = this.formQuestionService.mapQuestionsToFormGroup(this.questions as Question[]);
  }

  submit() {
    this.submitForm.emit(this.form.value);
  }
}
