import { ApiProperty } from '@nestjs/swagger';

export class CreateResultDto {
  @ApiProperty()
  readonly userId: string

  @ApiProperty()
  readonly questionId: string

  @ApiProperty()
  readonly isCorrect: boolean
}