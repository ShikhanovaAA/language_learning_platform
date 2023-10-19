import { Option } from './option';
import { z } from 'zod';

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

export const requiredOptions: Option[] = [{
  label: 'Required',
  key: 'required',
}];

export enum ControlType {
  INPUT = 'INPUT',
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  SELECT = 'SELECT',
}

export const ControlTypeSchema = z.nativeEnum(ControlType);
