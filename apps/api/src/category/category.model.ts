import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { CreateCategory } from './interfaces/create-category.interface';
import { Article } from '../article/article.model';

@Table({tableName: 'categories'})
export class Category extends Model<Category, CreateCategory> {

  @ApiProperty({example: 1, description: 'Unique identifier for the category'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ApiProperty({example: 'Present Simple', description: 'Name of category'})
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name!: string;

  @ApiProperty({example: 'The Present Simple is probably called Simple for a reason', description: 'Description'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

  @ApiProperty({example: [{id: 1, title: 'Present Simple', text: 'The Present Simple is probably called Simple for a reason...'}], description: 'Array of article objects'})
  @HasMany(() => Article)
  articles!: Article[];
}
