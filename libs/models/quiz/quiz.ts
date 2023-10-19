import { z } from 'zod';
import { NewQuestionDtoSchema, PassedQuizQuestionDtoSchema, QuestionDtoSchema, QuestionSchema } from './question';

export const NewQuizInfoSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(5),
});

export const QuizInfoSchema = NewQuizInfoSchema.extend({
  id: z.number(),
});

export const NewQuizSchema = NewQuizInfoSchema.extend({
  questions: z.array(NewQuestionDtoSchema).min(1),
});

export const QuizSchema = QuizInfoSchema.extend({
  questions: z.array(QuestionSchema).min(1),
  correctAnswersCount: z.number(),
});

export const QuizDtoSchema = QuizInfoSchema.extend({
  questions: z.array(QuestionDtoSchema).min(1),
});

export const PassedQuizSchema = NewQuizInfoSchema.extend({
  questions: z.array(PassedQuizQuestionDtoSchema).min(1),
});

export type NewQuiz = z.infer<typeof NewQuizSchema>;
export type Quiz = z.infer<typeof QuizSchema>;
export type QuizDto = z.infer<typeof QuizDtoSchema>;
export type FormQuiz = z.infer<typeof QuizSchema>;
export type PassedQuiz = z.infer<typeof PassedQuizSchema>;

