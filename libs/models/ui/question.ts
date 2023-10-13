import { Option, OptionSchema } from './option';
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

export const CorrectAnswerSchema = z.union([
  z.string().min(2, 'Answer must be at least 2 characters long'),
  OptionSchema.shape.key.min(1, 'Answer must be at least 1 option'),
  z.array(OptionSchema.shape.key).min(1, 'Answer must be at least 1 option'),
]);

export type CorrectAnswer = z.infer<typeof CorrectAnswerSchema>;

export const NewQuestionSchema = z.object({
  key: z.string(),
  label: z.string().min(5, 'Question must be at least 5 characters long'),
  order: z.number(),
  required: z.string(),
  controlType: ControlTypeSchema,
  correctAnswer: CorrectAnswerSchema,
  answerOptions: z.array(OptionSchema).optional(),
  validationError: z.string().optional(),
})

export type NewQuestion = z.infer<typeof NewQuestionSchema>;

export const NewQuizSchema = z.object({
  title: z.string().min(3),
  description: z.string(),
  questions: z.array(NewQuestionSchema).min(1),
})

export type NewQuizSchema = z.infer<typeof NewQuizSchema>;

export type Answer = Record<string, CorrectAnswer>;

export type Question = Omit<NewQuestion, 'correctAnswer'> & { id: number };

export type EditableQuestionFields = Pick<NewQuestion, 'label' | 'answerOptions' | 'correctAnswer'>;

export type QuestionControltypeUpdatingInfo = Pick<NewQuestion, 'controlType' | 'key'>;
