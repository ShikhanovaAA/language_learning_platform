import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { EditableQuestionFields, Option } from '@llp/models';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'llp-checkbox-builder',
  templateUrl: './checkbox-builder.component.html',
  styleUrls: ['./checkbox-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxBuilderComponent {
  _options: Option[] = [];
  _label = '';

  @Input()
  set label(label: string) {
    this._label = label;
  }

  @Input()
  set options(options: Option[]) {
    this._options = options;
  }

  @Output() checkboxUpdate = new EventEmitter<EditableQuestionFields>();

  checkedOptions: Option[] = [];

  toggleOption(option: Option) {
    if (this.isChecked(option.key)) {
      this.checkedOptions = this.checkedOptions.filter(checkedOption => checkedOption.key !== option.key);
    } else {
      this.checkedOptions.push(option);
    }

    this.updateQuestion();
  }

  isChecked(key: Option['key']) {
    return this.checkedOptions.some(checkedOption => checkedOption.key === key);
  }

  addOption() {
    this._options = this._options.concat({
      label: '',
      key: uuidv4(),
    });

    this.updateQuestion();
  }

  deleteOption(key: Option['key']) {
    this._options = this._options.filter(option => option.key !== key);

    this.updateQuestion();
  }

  updateQuestion() {
    this.checkboxUpdate.emit({
      label: this._label,
      answerOptions: this._options,
      correctAnswer: this.checkedOptions.map(option => option.key)
    });
  }
}
