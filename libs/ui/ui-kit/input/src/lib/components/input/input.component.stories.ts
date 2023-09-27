import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InputStyle, LabelPosition } from '@llp/models';
import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
} from '@storybook/angular';
import { InputComponent } from './input.component';

export default {
  title: 'Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, MatIconModule],
    }),
    componentWrapperDecorator(
      (story) => `<div style="width: 300px">${story}</div>`
    ),
  ],
  argTypes: {
    buttonStyle: {
      options: ['default', 'outline'],
      control: { type: 'radio' },
    },
    matIcon: {
      options: ['home', 'bin'],
      control: { type: 'radio' },
    },
  },
} as Meta<InputComponent>;

export const Default = {
  render: (args: InputComponent) => ({
    props: args,
  }),
  args: {
    width: '',
    placeholder: 'Default',
    inputStyle: InputStyle.Default,
  },
};
