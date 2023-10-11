import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { CreateWordWithTranslation } from './interfaces/dictionary-word.interface';

@Table({tableName: 'dictionary'})
export class DictionaryWord extends Model<DictionaryWord, CreateWordWithTranslation> {

  @ApiProperty({example: 1, description: 'Unique identifier for the word'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ApiProperty({example: 'Virtue', description: 'Some unknown word'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  word!: string;

  @ApiProperty({example: 'Добродетель'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  translation!: string;

  @ApiProperty({example: 'His virtue was of the purest tint'})
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  example!: string;

  @ApiProperty({example: 1, description: 'Unique identifier for the user'})
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;
}
