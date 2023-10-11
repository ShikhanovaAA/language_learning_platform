import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { UserRoles } from './user-roles.model';
import { CreateRole } from './interfaces/create-role.interface';

@Table({tableName: 'roles'})
export class Role extends Model<Role, CreateRole> {

  @ApiProperty({example: 1, description: 'Unique identifier for the role'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ApiProperty({example: 'ADMIN', description: 'User role value'})
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value!: string;

  @ApiProperty({example: 'Administrator', description: 'Role Description'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

  @BelongsToMany(() => User, () => UserRoles)
  users!: User[];
}
