/* eslint-disable arrow-body-style */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Quiz } from './quiz.model';
import { Question } from './question.model';
import { AnswerOption } from './answer-option.model';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { Answer } from './answer.model';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectModel(Quiz) private quizRepository: typeof Quiz,
    @InjectModel(Question) private questionRepository: typeof Question,
    @InjectModel(AnswerOption) private answerOptionRepository: typeof AnswerOption,
    @InjectModel(Answer) private answerRepository: typeof Answer,
  ) {}

  async createQuiz(dto: CreateQuizDto): Promise<Quiz> {
    const quiz = await this.quizRepository.create({
      title: dto.title,
      description: dto.description,
    });

    const questions = dto.questions.map(question => ({
      label: question.label,
      order: question.order,
      required: question.required,
      controlType: question.controlType,
      quizId: quiz.id,
    }));

    const createdQuestions = await this.questionRepository.bulkCreate(questions);

    const answerOptions = createdQuestions.flatMap((question: Question, index: number) =>
      dto.questions[index].answerOptions.map(answerOption => ({
        label: answerOption.label,
        key: answerOption.key,
        questionId: question.id,
        isCorrectAnswer: answerOption.isCorrectAnswer,
      })),
    );

    await this.answerOptionRepository.bulkCreate(answerOptions);

    return quiz;
  }

  async getAllQuizzes(userId: number): Promise<{quizzes: Quiz[], answers: Answer[]}> {
    let answers: Answer[] = [];

    if (userId) {
      answers = await this.answerRepository.findAll({
        where: {
          userId,
        },
        include: [
          {
            model: AnswerOption,
            attributes: ['isCorrectAnswer' , 'label'],
          },
          {
            model: Question,
            include: [
              {
                model: AnswerOption,
              },
            ],
          },
        ],
      });
    }

    const quizzes = await this.quizRepository.findAll({
      include: {
        all: true,
        nested: true,
      },
      limit: 10,
      offset: 0,
    });

    return {quizzes, answers};
  }

  async getQuizById(id: number) {
    if (isNaN(id)) return new HttpException('Id must be a number', HttpStatus.BAD_REQUEST);

    const quiz = await this.quizRepository.findByPk(id, {
      include: {
        all: true,
        nested: true,
      },
    });

    return quiz;
  }

  async saveQuizAnswers(dto: CreateAnswerDto[], userId: number): Promise<Answer[]> {
    const answers = dto.map(answer => ({
      ...answer,
      userId,
    }));

    await this.answerRepository.destroy({
      where: {
        userId,
        quizId: dto[0].quizId,
      },
    })

    const createdAnswers = await this.answerRepository.bulkCreate(answers);

    return createdAnswers;
  }

  async getPassedQuizById(quizId: number, userId: number): Promise<
    {quiz: Quiz | null,
      answers: Answer[]
    } | HttpException
  > {
    if (isNaN(quizId)) return new HttpException('Id must be a number', HttpStatus.BAD_REQUEST);

    const quiz = await this.quizRepository.findByPk(quizId, {
      include: [
        {
          all: true,
          nested: true,
        },
      ],
    });

    const answers = await this.answerRepository.findAll({
        where: {
          userId,
          quizId,
        },
        include: [
          {
            model: AnswerOption,
            attributes: ['isCorrectAnswer' , 'label'],
          },
          {
            model: Question,
            include: [
              {
                model: AnswerOption,
              },
            ],
          },
        ],
      });

    return {quiz, answers};
  }
}
