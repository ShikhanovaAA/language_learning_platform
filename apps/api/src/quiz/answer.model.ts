import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Question } from './question.model';
import { CreateAnswer } from './interfaces/create-answer.interface';
import { User } from '../user/user.model';
import { Quiz } from './quiz.model';
import { AnswerOption } from './answer-option.model';

@Table({tableName: 'answers'})
export class Answer extends Model<Answer, CreateAnswer> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id!: number;

  @ApiProperty({example: 'Can', description: 'Answer option label'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  value!: string;

  @ForeignKey(() => AnswerOption)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  answerOptionId!: number;

  @ForeignKey(() => Question)
  @Column({type: DataType.INTEGER})
  questionId!: number;

  @ForeignKey(() => Quiz)
  @Column({type: DataType.INTEGER})
  quizId!: number;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId!: number;

  @BelongsTo(() => Question)
  question!: Question;

  @BelongsTo(() => Quiz)
  quiz!: Question;

  @BelongsTo(() => AnswerOption)
  answerOption!: AnswerOption;
}
