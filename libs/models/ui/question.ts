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

export interface NewQuestion  {
  key: string;
  label: string;
  order: number;
  required: string;
  controlType: ControlType;
  answerOptions?: Option[];
  correctAnswer: Option['key'] | Array<Option['key']> | null;
}

export type Question = Omit<NewQuestion, 'correctAnswer'> & { id: number };

export type EditableQuestionFields = Pick<NewQuestion, 'label' | 'answerOptions' | 'correctAnswer'>;


export type QuestionControltypeUpdatingInfo = Pick<NewQuestion, 'controlType' | 'key'>;
