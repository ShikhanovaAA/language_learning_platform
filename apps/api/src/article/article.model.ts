import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { CreateArticle } from './interfaces/create-article.interface';
import { User } from '../user/user.model';
import { StudiedArticles } from './studied-articles.model';
import { Category } from '../category/category.model';

@Table({tableName: 'articles'})
export class Article extends Model<Article, CreateArticle> {

  @ApiProperty({example: 1, description: 'Unique identifier for the article'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ApiProperty({example: 'How to Reach C1 Level in English in One Month', description: 'Title of the article'})
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  title: string;

  @ApiProperty({example: 'Learning a new language can be a challenging yet rewarding experience...', description: 'Body of the article'})
  @Column({
    type: DataType.STRING(3000),
    allowNull: false
  })
  text: string;


  @ApiProperty({example: 1, description: 'Unique identifier for the author'})
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  authorId: number;

  @ApiProperty({example: {id: 1, name: 'John', email: 'johndoe@example'}, description: 'User object'})
  @BelongsTo(() => User)
  author: User;

  @ApiProperty({example: [{id: 1, name: 'John', email: 'johndoe@example'}], description: 'User objects'})
  @BelongsToMany(() => User, () => StudiedArticles)
  readers: User[];

  @ApiProperty({example: 1, description: 'Unique identifier for the category'})
  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  categoryId: number;

  @ApiProperty({example: {id: 1, name: 'Present Simple'}, description: 'Category object'})
  @BelongsTo(() => Category)
  category: Category;
}
