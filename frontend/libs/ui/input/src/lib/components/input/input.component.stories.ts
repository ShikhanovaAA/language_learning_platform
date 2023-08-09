import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InputStyle, LabelPosition } from '@llp/model';
import { componentWrapperDecorator, moduleMetadata, Meta } from '@storybook/angular';
import { InputComponent } from './input.component';

export default {
  title: 'Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, MatIconModule]
    }),
    componentWrapperDecorator(story => `<div style="width: 300px">${story}</div>`),
  ]
} as Meta<InputComponent>;

export const Default = {
  render: (args: InputComponent) => ({
    props: args,
  }),
  args: {
    width: '',
    placeholder: 'Default',
    inputStyle: InputStyle.Default
  },
};

export const Outline = {
  render: (args: InputComponent) => ({
    props: args,
  }),
  args: {
    width: '',
    placeholder: 'Outline',
    inputStyle: InputStyle.Outline
  },
};

export const Filled = {
  render: (args: InputComponent) => ({
    props: args,
  }),
  args: {
    width: '',
    placeholder: 'Filled',
    inputStyle: InputStyle.Filled
  },
};

export const FilledWithIcon = {
  render: (args: InputComponent) => ({
    props: args,
  }),
  args: {
    placeholder: 'Filled',
    inputStyle: InputStyle.Filled,
    labelPosition: LabelPosition.Left,
    matIcon: 'home'
  },
};

export const OutlineWithIcon = {
  render: (args: InputComponent) => ({
    props: args,
  }),
  args: {
    placeholder: 'Outline',
    inputStyle: InputStyle.Outline,
    labelPosition: LabelPosition.Left,
    matIcon: 'home'
  },
};

export const DefaultWithIcon = {
  render: (args: InputComponent) => ({
    props: args,
  }),
  args: {
    placeholder: 'Default',
    inputStyle: InputStyle.Default,
    labelPosition: LabelPosition.Left,
    matIcon: 'home'
  },
};
