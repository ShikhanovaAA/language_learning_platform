import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InputStyle, LabelPosition } from '@llp/models';
import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
} from '@storybook/angular';
import { PasswordInputComponent } from './password-input.component';

export default {
  title: 'PasswordInput',
  component: PasswordInputComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, MatIconModule],
    }),
    componentWrapperDecorator(
      (story) => `<div style="width: 300px">${story}</div>`
    ),
  ],
} as Meta<PasswordInputComponent>;

export const Default = {
  render: (args: PasswordInputComponent) => ({
    props: args,
  }),
  args: {
    width: '',
    placeholder: 'Default',
    inputStyle: InputStyle.Default,
  },
};
