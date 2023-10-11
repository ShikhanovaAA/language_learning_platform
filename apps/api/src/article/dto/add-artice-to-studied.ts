import { ApiProperty } from '@nestjs/swagger';

export class AddArticleToStudiedDto {
  @ApiProperty({example: 4})
  readonly userId!: number;

  @ApiProperty({example: 1})
  readonly articleId!: number;
}
