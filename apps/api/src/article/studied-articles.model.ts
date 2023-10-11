import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Article } from './article.model';
import { CreateStudiedArticle } from './interfaces/create-studied-article';

@Table({tableName: 'studied_articles', createdAt: false, updatedAt: false})
export class StudiedArticles extends Model<StudiedArticles, CreateStudiedArticle> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id!: number;

  @ForeignKey(() => Article)
  @Column({type: DataType.INTEGER})
  articleId!: number;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId!: number;
}
