/* eslint-disable arrow-body-style */
import { QuizDto, QuestionDto, PassedQuiz, PassedQuizAnswerOption, AnswerOption, AnswerWithCorrectAnswerDto } from '@llp/models';

export const mapResultToPassedQuiz = (quiz: QuizDto, answers: AnswerWithCorrectAnswerDto[]): PassedQuiz => ({
  ...quiz,
  questions: quiz.questions.map((question: QuestionDto) => {
    const questionAnswer = answers.find(answer => answer.questionId === question.id);

    if (questionAnswer) {
      return {
        ...question,
        key: String(question.id),
        answerOptions: mapAnswerOptionsDtoToPassedQuiAnswerOptions(question.answerOptions, questionAnswer),
        userAnswer: getUserAnswer(questionAnswer),
        userAnsweredCorrectly: checkIfUserAnsweredCorrectly(questionAnswer),
        correctAnswer: getCorrectAnswer(question.answerOptions),
      };
    }

    return {
      ...question,
      answerOptions: question.answerOptions.map((option: AnswerOption) => ({
        ...option,
        key: String(option.id),
        isUserAnswer: false,
      })),
      key: String(question.id),
      userAnswer: '',
      userAnsweredCorrectly: false,
      correctAnswer: '',
    };
  }),
});

export const mapAnswerOptionsDtoToPassedQuiAnswerOptions = (
  answerOptions: AnswerOption[], answer: AnswerWithCorrectAnswerDto): PassedQuizAnswerOption[] => {
    return answerOptions.map(option => ({
      ...option,
      key: String(option.id),
      isUserAnswer: answer.answerOptionId === option.id,
    }));
};

export const getUserAnswer = (answer: AnswerWithCorrectAnswerDto): string => {
  return (answer.answerOptionId ? answer.answerOption?.label : answer.value) || '';
};

export const checkIfUserAnsweredCorrectly = (answer: AnswerWithCorrectAnswerDto): boolean => {
  if (answer.answerOptionId) return answer.answerOption?.isCorrectAnswer || false;

  return answer.value === answer.question.answerOptions[0].label;
};

export const getCorrectAnswer = (questionOption: AnswerOption[]): string => {
  const correctAnswers = questionOption.filter(option => option.isCorrectAnswer);
  if (!correctAnswers) return '';
  return correctAnswers.map(answer => answer.label).join(', ');
};
