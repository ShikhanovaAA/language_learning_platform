import { FormsModule } from '@angular/forms';
import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
} from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
    componentWrapperDecorator(
      story => `<div style="width: 300px">${story}</div>`,
    ),
  ],
} as Meta<CheckboxComponent>;

export const Default = {
  render: (args: CheckboxComponent) => ({
    props: args,
  }),
  args: {
    label: 'Choose one',
    options: [
      {
        label: 'Option 1',
        key: 'option1',
      },
      {
        label: 'Option 2',
        key: 'option2',
      },
    ],
  },
};
