import { FormsModule } from '@angular/forms';
import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
} from '@storybook/angular';
import { CheckboxBuilderComponent } from './checkbox-builder.component';

export default {
  title: 'Checkbox',
  component: CheckboxBuilderComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
    componentWrapperDecorator(
      (story) => `<div style="width: 300px">${story}</div>`
    ),
  ],
} as Meta<CheckboxBuilderComponent>;

export const Default = {
  render: (args: CheckboxBuilderComponent) => ({
    props: args,
  }),
};
