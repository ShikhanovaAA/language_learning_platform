import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({example: 'test@test.com', description: 'Email address of the user'})
  readonly email: string;

  @ApiProperty({example: 'aA123456', description: 'Password of the user'})
  readonly password: string;
}
