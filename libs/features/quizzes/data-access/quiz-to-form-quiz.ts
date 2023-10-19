import { Quiz, Question, FormQuiz, AnswerOption } from '@llp/models';

export const mapQuizToFormQuiz = (quizDto: Quiz): FormQuiz => ({
  ...quizDto,
  questions: quizDto.questions.map((question: Question) => ({
      ...question,
      key: String(question.id),
      answerOptions: question.answerOptions.map(answerOption => {
        const option = answerOption as AnswerOption;

        return {
          label: option.label,
          key: String(option.id),
        }
      }),
  })),
});
