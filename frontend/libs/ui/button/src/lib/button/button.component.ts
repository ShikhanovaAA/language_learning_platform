import { Component, Input } from '@angular/core';
import { ButtonStyle } from '@llp/model';

@Component({
  selector: 'llp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  text!: string;

  @Input()
  buttonStyle: ButtonStyle = ButtonStyle.Default;

  @Input()
  disabled?: boolean = false;

  @Input()
  matIcon?: string;
}
