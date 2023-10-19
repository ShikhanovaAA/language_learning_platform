import { ApiProperty } from '@nestjs/swagger';

export class CreateAnswerDto {
  @ApiProperty({example: 'Can'})
  readonly value!: string;

  @ApiProperty({example: 1})
  readonly quizId!: number;

  @ApiProperty({example: 1})
  readonly questionId!: number;

  @ApiProperty({example: 1})
  readonly answerOptionId!: number;
}
