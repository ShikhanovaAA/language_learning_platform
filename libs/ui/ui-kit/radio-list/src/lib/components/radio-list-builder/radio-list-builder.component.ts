import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditableQuestionFields, Option } from '@llp/models';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'llp-radio-list-builder',
  templateUrl: './radio-list-builder.component.html',
  styleUrls: ['./radio-list-builder.component.scss'],
})
export class RadioListBilderComponent {
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

  @Output() radioUpdate = new EventEmitter<EditableQuestionFields>();

  selectedOption?: Option;

  valueChange(option: Option) {
    this.selectedOption = option;
    this.updateQuestion();
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
    this.radioUpdate.emit({
      label: this._label,
      answerOptions: this._options,
      correctAnswer: this.selectedOption?.key
    });
  }
}
