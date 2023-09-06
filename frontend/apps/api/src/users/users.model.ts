import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';
import { CreateUser } from './interfaces/create-user.interface';

@Table({tableName: 'users'})
export class User extends Model<User, CreateUser> {

  @ApiProperty({example: 1, description: 'Unique identifier for the user'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ApiProperty({example: 'test@test.com', description: 'Email address of the user'})
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  email: string;

  @ApiProperty({example: 'aA123456', description: 'Password of the user'})
  @Column({
    type: DataType.STRING,
  })
  password: string;

  @ApiProperty({example: 'John', description: 'Username of the user'})
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  username: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
