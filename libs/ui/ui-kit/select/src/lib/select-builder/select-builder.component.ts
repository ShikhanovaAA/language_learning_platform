import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { EditableQuestionFields, Option } from '@llp/models';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'llp-select-builder',
  templateUrl: './select-builder.component.html',
  styleUrls: ['./select-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectBuilderComponent {
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

  @Output() selectSettingsUpdated = new EventEmitter<EditableQuestionFields>();

  selectedOption?: Option;

  valueChange(option: Option) {
    this.selectedOption = option;
    this.updateQuestionSettings();
  }

  addOption() {
    this._options = this._options.concat({
      label: '',
      key: uuidv4(),
    });

    this.updateQuestionSettings();
  }

  deleteOption(key: Option['key']) {
    this._options = this._options.filter(option => option.key !== key);

    this.updateQuestionSettings();
  }

  updateQuestionSettings() {
    this.selectSettingsUpdated.emit({
      label: this._label,
      answerOptions: this._options,
      correctAnswer: this.selectedOption?.key,
    });
  }

  trackByFn(index: number, item: Option) {
    return item.key;
  }
}
