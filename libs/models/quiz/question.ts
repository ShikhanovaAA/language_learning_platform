import { ControlTypeSchema } from '../ui/control-options';
import { AnswerOptionSchema, AnswerOptionsFormSchema, NewAnswerOptionSchema, PassedQuizAnswerOptionsSchema } from './answer-option';
import { OptionSchema } from '../ui/option';
import { z } from 'zod';

export const NewQuestionSchema = z.object({
  key: z.string(),
  label: z.string(),
  order: z.number(),
  required: z.string(),
  controlType: ControlTypeSchema,
  answerOptions: z.array(NewAnswerOptionSchema),
});

export const NewQuestionFormSchema = NewQuestionSchema.extend({
  answerOptions: AnswerOptionsFormSchema,
});

export const NewQuestionDtoSchema = NewQuestionSchema.extend({
  required: z.boolean(),
});

export const QuestionSchema = NewQuestionDtoSchema.extend({
  id: z.number(),
  answerOptions: z.array(OptionSchema),
});

export const QuestionDtoSchema = QuestionSchema.extend({
  answerOptions: z.array(AnswerOptionSchema),
})

export const PassedQuizQuestionDtoSchema = QuestionSchema.extend({
  answerOptions: z.array(PassedQuizAnswerOptionsSchema),
  userAnswer: z.string(),
  userAnsweredCorrectly: z.boolean(),
  correctAnswer: z.string(),
})

export type NewQuestion = z.infer<typeof NewQuestionSchema>;

export type NewFormQuestion = z.infer<typeof NewQuestionFormSchema>;

export type NewQuestionDto = z.infer<typeof NewQuestionDtoSchema>;

export type Question = z.infer<typeof QuestionSchema>;

export type QuestionDto = z.infer<typeof QuestionDtoSchema>;

export type PassedQuizQuestion = z.infer<typeof PassedQuizQuestionDtoSchema>;
