import { Column, Table, Model } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Result extends Model {
  @ApiProperty()
  @Column
  userId: string;

  @ApiProperty()
  @Column
  questionId: string;

  @ApiProperty()
  @Column
  isCorrect: boolean;
}