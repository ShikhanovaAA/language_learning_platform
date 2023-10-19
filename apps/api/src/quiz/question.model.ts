import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Quiz } from './quiz.model';
import { CreateQuestion } from './interfaces/create-question.interface';
import { AnswerOption } from './answer-option.model';

@Table({tableName: 'questions'})
export class Question extends Model<Question, CreateQuestion> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id!: number;

  @ApiProperty({example: 'Choose the appropriate modal verb', description: 'Question title'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  label!: string;

  @ApiProperty({example: 0, description: 'Question number'})
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  order!: number;

  @ApiProperty({example: true, description: 'Is the question mandatory?'})
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  required!: boolean;

  @ApiProperty({example: 'INPUT', description: 'The type of control that will be used to answer the question'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  controlType!: string;

  @ForeignKey(() => Quiz)
  @Column
  quizId!: number;

  @BelongsTo(() => Quiz)
  quiz!: Quiz;

  @HasMany(() => AnswerOption)
  answerOptions!: AnswerOption[];
}
