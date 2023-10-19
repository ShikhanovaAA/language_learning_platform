import { ApiProperty } from '@nestjs/swagger';
import { CreateAnswerOptionDto } from './create-answer-option.dto';

export class CreateQuestionDto {
  @ApiProperty({example: 'Choose the appropriate modal verb'})
  label!: string;

  @ApiProperty({example: 0})
  order!: number;

  @ApiProperty({example: true})
  required!: boolean;

  @ApiProperty({example: 'INPUT'})
  controlType!: string;

  @ApiProperty({example: [{label: 'Can'}, {label: 'Must'}]})
  answerOptions!: CreateAnswerOptionDto[];
}
