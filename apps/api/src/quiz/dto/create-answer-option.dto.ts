import { ApiProperty } from '@nestjs/swagger';

export class CreateAnswerOptionDto {
  @ApiProperty({example: 'Can'})
  label!: string;

  @ApiProperty({example: '457860e7-6677-44f2-aca4-11483124cbd1'})
  key!: string;

  @ApiProperty({example: true})
  isCorrectAnswer!: boolean;
}
