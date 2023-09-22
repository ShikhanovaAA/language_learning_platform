import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({example: 'Present Simple'})
  readonly name: string;

  @ApiProperty({example: 'Why should everyone start learning English grammar with the Present Simple?'})
  readonly description: string;
}
