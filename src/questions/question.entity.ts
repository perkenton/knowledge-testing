import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class Question extends Model {
  @Column
  question: string;

  @Column
  answer: boolean;
}