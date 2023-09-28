import { SelectOption } from './select-option';

export type ControlType = 'RADIO' | 'INPUT' | 'CHECKBOX' | 'SELECT';

export interface Question {
  id: number;
  key: string;
  label: string;
  order: number;
  required?: boolean;
  controlType: ControlType;
  answerOptions?: SelectOption[];
}
