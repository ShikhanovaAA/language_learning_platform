import { ApiProperty } from '@nestjs/swagger';
import { CreateQuestionDto } from './create-question.dto';

export class CreateQuizDto {
  @ApiProperty({example: 'Title'})
  readonly title!: string;

  @ApiProperty({example: 'Description'})
  readonly description!: string;

  @ApiProperty({example: [{ label: 'Can', order: 0, required: true, controlType: 'INPUT' }]})
  questions!: CreateQuestionDto[];
}
