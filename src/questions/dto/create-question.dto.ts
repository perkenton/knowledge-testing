import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty()
  readonly question: string

  @ApiProperty()
  readonly answer: boolean
}