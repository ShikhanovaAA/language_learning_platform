import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Role } from '../role/role.model';
import { UserRoles } from '../role/user-roles.model';
import { CreateUser } from './interfaces/create-user.interface';
import { Article } from '../article/article.model';
import { StudiedArticles } from '../article/studied-articles.model';

@Table({tableName: 'users'})
export class User extends Model<User, CreateUser> {

  @ApiProperty({example: 1, description: 'Unique identifier for the user'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ApiProperty({example: 'test@test.com', description: 'Email address of the user'})
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email!: string;

  @ApiProperty({example: 'aA123456', description: 'Password of the user'})
  @Column({
    type: DataType.STRING,
  })
  password!: string;

  @ApiProperty({example: 'John', description: 'Username of the user'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username!: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles!: Role[];

  @HasMany(() => Article)
  articles!: Article[];

  @BelongsToMany(() => Article, () => StudiedArticles)
  studiedArticles!: Article[];
}
