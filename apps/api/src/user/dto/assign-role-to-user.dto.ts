import { ApiProperty } from '@nestjs/swagger';

export class AssignRoleToUserDto {
  @ApiProperty({example: 'ADMIN', description: 'Role'})
  readonly value!: string;

  @ApiProperty({example: 1, description: 'User ID'})
  readonly userId!: number;
}
