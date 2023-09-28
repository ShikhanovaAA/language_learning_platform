import { Option } from './option';

export type ControlType = 'RADIO' | 'INPUT' | 'CHECKBOX' | 'SELECT';

export interface Question {
  id: number;
  key: string;
  label: string;
  order: number;
  required?: boolean;
  controlType: ControlType;
  answerOptions?: Option[];
}
