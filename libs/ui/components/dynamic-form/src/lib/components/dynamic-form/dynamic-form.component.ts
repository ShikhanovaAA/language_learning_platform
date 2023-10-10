import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Answer, LabelPosition, Question } from '@llp/models';
import { FormQuestionService } from '../../services/form-question.service';

@Component({
  selector: 'llp-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: Question[] = [];
  @Input() labelPosition!: LabelPosition;

  @Output() submitForm = new EventEmitter<Answer[]>();
  form!: FormGroup;

  constructor(private formQuestionService: FormQuestionService) {}

  ngOnInit() {
    this.form = this.formQuestionService.mapQuestionsToFormGroup(this.questions as Question[]);
  }

  submit() {
    this.submitForm.emit(this.form.value);
  }

  trackByFn(index: number, question: Question) {
    return question.key;
  }
}
