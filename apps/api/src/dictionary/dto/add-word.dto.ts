import { ApiProperty } from '@nestjs/swagger';

export class AddWordDto {
  @ApiProperty({example: 'Virtue'})
  readonly word: string;

  @ApiProperty({example: 'Добродетель'})
  readonly translation: string;

  @ApiProperty({example: 'His virtue was of the purest tint'})
  readonly example: string;

  @ApiProperty({example: 1})
  readonly userId: number;
}

export class NewWord {
  @ApiProperty({example: 'Virtue'})
  readonly word: string;
}
