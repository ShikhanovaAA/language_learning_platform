import { Option } from './option';

export type ControlType = 'RADIO' | 'INPUT' | 'CHECKBOX' | 'SELECT';

export const controlOptions: Option[] = [
  {
    key: 'RADIO',
    label: 'Radio'
  },
  {
    key: 'CHECKBOX',
    label: 'Checkbox'
  },
  {
    key: 'SELECT',
    label: 'Select'
  },
  {
    key: 'INPUT',
    label: 'Input'
  },
];

export interface Question {
  id?: number;
  key: string;
  label: string;
  order: number;
  required?: string;
  controlType: ControlType;
  answerOptions?: Option[];
}

export interface EditableQuestionFields {
  label: string;
  answerOptions: Option[];
}

export type QuestionControltypeUpdatingInfo = Pick<Question, 'controlType' | 'key'>;
