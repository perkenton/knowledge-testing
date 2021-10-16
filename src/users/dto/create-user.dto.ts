import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty()
  readonly name: string

  @ApiProperty()
  readonly surname: string

  @ApiProperty()
  readonly patronymic: string
}