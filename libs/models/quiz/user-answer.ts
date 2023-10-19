import { z } from 'zod';
import { QuestionSchema } from './question';
import { AnswerOptionSchema } from './answer-option';

export const AnswerSchema = z.object({
  quizId: z.number(),
  questionId: z.number(),
  value: z.string(),
});

export const AnswerDtoSchema = AnswerSchema.extend({
  answerOptionId: z.number().nullable(),
});

export const AnswersDtoSchema = z.array(AnswerDtoSchema);

export type Answer = z.infer<typeof AnswerSchema>;

export type AnswerDto = z.infer<typeof AnswerDtoSchema>;

export type FormAnswer = Record<string, string>;

export const AnswerWithCorrectAnswerDtoSchema = AnswerSchema.extend({
  question: QuestionSchema,
  answerOption: z.nullable(AnswerOptionSchema),
  answerOptionId: z.number().nullable(),
});

export type AnswerWithCorrectAnswerDto = z.infer<typeof AnswerWithCorrectAnswerDtoSchema>;
