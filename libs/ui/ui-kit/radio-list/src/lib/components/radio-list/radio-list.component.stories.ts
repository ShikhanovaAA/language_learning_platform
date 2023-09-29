import { FormsModule } from '@angular/forms';
import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
} from '@storybook/angular';
import { RadioListComponent } from './radio-list.component';

export default {
  title: 'Radio',
  component: RadioListComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
    componentWrapperDecorator(
      (story) => `<div style="width: 300px">${story}</div>`
    ),
  ],
} as Meta<RadioListComponent>;

export const Default = {
  render: (args: RadioListComponent) => ({
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
