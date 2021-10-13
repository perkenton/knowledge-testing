import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  surname: string;

  @Column
  patronymic: string;
}