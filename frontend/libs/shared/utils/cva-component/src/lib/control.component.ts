import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  template: '',
})
export abstract class ControlComponent<T> implements ControlValueAccessor {
  private _value!: T;
  private _isDisabled = false;

  onChangeFn: (value: T) => void = () => {};
  onTouchedFn!: () => void;

  onSetValue(value: T) {}
  onDisabledChange(disabled: boolean) {}

  writeValue(value: T): void {
    this._value = value;
  }

  registerOnChange(onChangeFn: any): void {
    this.onChangeFn = onChangeFn;
  }

  registerOnTouched(onTouchedFn: any): void {
    this.onTouchedFn = onTouchedFn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
    this.onDisabledChange(isDisabled);
  }

  get value() {
    return this._value;
  }

  get isDisabled() {
    return this._isDisabled;
  }

  set value(value: T) {
    if (this.isValueDifferent(value) && !this._isDisabled) {
      this._value = value;
      this.onSetValue(value);
      this.onChangeFn?.(value);
    }
  }

  isValueDifferent(nextValue: T) {
    return nextValue !== this._value;
  }
}
