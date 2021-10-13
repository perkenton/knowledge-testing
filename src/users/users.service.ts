import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {
  constructor(
    private sequelize: Sequelize,
    @InjectModel(User)
    private userModel: typeof User,
  ) {}


  async findAll(): Promise<User[]> {
    return this.userModel.findAll()
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.surname = createUserDto.surname;
    user.patronymic = createUserDto.patronymic;

    return user.save();
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}