import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { CreateQuiz } from './interfaces/create-quiz.interface';
import { Question } from './question.model';

@Table({tableName: 'quizzes'})
export class Quiz extends Model<Quiz, CreateQuiz> {

  @ApiProperty({example: 1, description: 'Unique identifier for the article'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ApiProperty({example: 'Modal verbs', description: 'Title of the article'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @ApiProperty({example: 'Questions on the topic of modal verbs', description: 'Body of the article'})
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description!: string;

  @HasMany(() => Question)
  questions!: Question[];
}
