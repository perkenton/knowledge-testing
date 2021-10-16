import { Column, Table, Model } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Question extends Model {
  @ApiProperty()
  @Column
  question: string;

  @ApiProperty()
  @Column
  answer: boolean;
}