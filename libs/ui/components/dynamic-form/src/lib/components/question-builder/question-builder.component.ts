import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'llp-question-builder',
  templateUrl: './question-builder.component.html',
  styleUrls: ['./question-builder.component.scss'],
})
export class QuestionBuilderComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) showErrors!: boolean;

  get controlType() {
    return this.form.get('controlType')?.value;
  }
}
