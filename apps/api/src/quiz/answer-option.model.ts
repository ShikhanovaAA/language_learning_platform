import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Question } from './question.model';
import { CreateAnswerOption } from './interfaces/create-answer-option.interface';

@Table({tableName: 'answer_options', createdAt: false, updatedAt: false})
export class AnswerOption extends Model<AnswerOption, CreateAnswerOption> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id!: number;

  @ApiProperty({example: 'Can', description: 'Answer option label'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  label!: string;

  @ApiProperty({example: '457860e7-6677-44f2-aca4-11483124cbd1', description: 'Answer option key'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  key!: string;

  @ApiProperty({example: true, description: 'The flag displays whether this option is the correct answer'})
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isCorrectAnswer!: boolean;

  @ForeignKey(() => Question)
  @Column
  questionId!: number;

  @BelongsTo(() => Question)
  question!: Question;
}
