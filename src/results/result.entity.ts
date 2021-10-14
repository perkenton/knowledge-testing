import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class Result extends Model {
  @Column
  userId: string;

  @Column
  questionId: string;

  @Column
  isCorrect: boolean;
}