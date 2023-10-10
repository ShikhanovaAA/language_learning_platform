import { Option } from './option';

export type ControlType = 'RADIO' | 'INPUT' | 'CHECKBOX' | 'SELECT';

export const controlOptions: Option[] = [
  {
    key: 'INPUT',
    label: 'Input',
  },
  {
    key: 'RADIO',
    label: 'Radio',
  },
  {
    key: 'CHECKBOX',
    label: 'Checkbox',
  },
  {
    key: 'SELECT',
    label: 'Select',
  },
];

export interface NewQuestion  {
  key: string;
  label: string;
  order: number;
  required: string;
  controlType: ControlType;
  answerOptions?: Option[];
  correctAnswer: CorrectAnswer;
}

export type Answer = Record<string, CorrectAnswer>;

export type CorrectAnswer = Option['key'] | Array<Option['key']> | null | undefined;

export type Question = Omit<NewQuestion, 'correctAnswer'> & { id: number };

export type EditableQuestionFields = Pick<NewQuestion, 'label' | 'answerOptions' | 'correctAnswer'>;

export type QuestionControltypeUpdatingInfo = Pick<NewQuestion, 'controlType' | 'key'>;
