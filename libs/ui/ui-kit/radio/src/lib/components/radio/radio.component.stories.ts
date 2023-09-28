import { FormsModule } from '@angular/forms';
import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
} from '@storybook/angular';
import { RadioComponent } from './radio.component';

export default {
  title: 'Radio',
  component: RadioComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
    componentWrapperDecorator(
      (story) => `<div style="width: 300px">${story}</div>`
    ),
  ],
} as Meta<RadioComponent>;

export const Default = {
  render: (args: RadioComponent) => ({
    props: args,
  }),
  args: {
    label: 'Choose one',
    options: [
      {
        label: 'Option 1',
        value: 'option1',
      },
      {
        label: 'Option 2',
        value: 'option2',
      }
    ]
  },
};
