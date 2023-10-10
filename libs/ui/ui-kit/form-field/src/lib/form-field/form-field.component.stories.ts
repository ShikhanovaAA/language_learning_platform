import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  StoryFn,
} from '@storybook/angular';
import { FormFieldComponent } from './form-field.component';
import { UiInputModule } from '@llp/ui/ui-kit/input';

export default {
  title: 'FormField',
  component: FormFieldComponent,
  decorators: [
    moduleMetadata({
      declarations: [FormFieldComponent],
      imports: [UiInputModule],
    }),
    componentWrapperDecorator(
      story => `<div style="width: 300px">${story}</div>`,
    ),
  ],
} as Meta<FormFieldComponent>;

const LabelTopPositionTemplate: StoryFn<FormFieldComponent> = (
  args: FormFieldComponent,
) => ({
  props: args,
  template: `
    <llp-form-field label="Name" labelPosition="top">
      <llp-input inputStyle="filled"></llp-input>
    </llp-form-field>
  `,
});

export const LabelTopPosition = LabelTopPositionTemplate.bind({});

const LabelBottomPositionTemplate: StoryFn<FormFieldComponent> = (
  args: FormFieldComponent,
) => ({
  props: args,
  template: `
    <llp-form-field label="Name" labelPosition="bottom">
      <llp-input inputStyle="filled"></llp-input>
    </llp-form-field>
  `,
});

export const LabelBottomPosition = LabelBottomPositionTemplate.bind({});

const LabelLeftPositionTemplate: StoryFn<FormFieldComponent> = (
  args: FormFieldComponent,
) => ({
  props: args,
  template: `
    <llp-form-field label="Name" labelPosition="left">
      <llp-input inputStyle="filled"></llp-input>
    </llp-form-field>
  `,
});

export const LabelLeftPosition = LabelLeftPositionTemplate.bind({});
