import { Column, Table, Model } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class User extends Model {
  @ApiProperty()
  @Column
  name: string;

  @ApiProperty()
  @Column
  surname: string;

  @ApiProperty()
  @Column
  patronymic: string;
}