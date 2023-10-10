import {
  Meta,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule],
    }),
    componentWrapperDecorator(
      story => `<div style="width: 300px">${story}</div>`,
    ),
  ],
  argTypes: {
    buttonStyle: {
      options: ['default', 'outline'],
      control: 'inline-radio',
    },
    matIcon: {
      control: 'text',
      description:
        'Icon names can be found here 👉 https://fonts.google.com/icons',
      default: 'pets',
    },
  },
} as Meta<ButtonComponent>;

export const Default = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    text: 'Button',
    matIcon: 'pets',
    disabled: false,
  },
};
