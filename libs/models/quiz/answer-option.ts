import { z } from 'zod';

export const NewAnswerOptionSchema = z.object({
  key: z.string(),
  label: z.string(),
  isCorrectAnswer: z.boolean(),
});

export const AnswerOptionSchema = NewAnswerOptionSchema.extend({
  id: z.number(),
});

export const PassedQuizAnswerOptionsSchema = AnswerOptionSchema.extend({
  isUserAnswer: z.boolean(),
});

export type NewAnswerOption = z.infer<typeof NewAnswerOptionSchema>;

export type AnswerOption = z.infer<typeof AnswerOptionSchema>;

export type PassedQuizAnswerOption = z.infer<typeof PassedQuizAnswerOptionsSchema>;

export const AnswerOptionsFormSchema = z.record(z.string(), NewAnswerOptionSchema);

