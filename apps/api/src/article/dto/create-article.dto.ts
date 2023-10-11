import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty({example: 'Title'})
  readonly title!: string;

  @ApiProperty({example: 'Text'})
  readonly text!: string;

  @ApiProperty({example: 1})
  readonly categoryId!: number;
}
