import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

import { Question } from './question.model';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    private sequelize: Sequelize,
    @InjectModel(Question)
    private questionModel: typeof Question,
  ) {}


  async findAll(): Promise<Question[]> {
    return this.questionModel.findAll()
  }

  async findOne(id: string): Promise<Question> {
    return this.questionModel.findOne({
      where: {
        id,
      },
    });
  }

  async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
    const question = new Question();
    question.question = createQuestionDto.question;
    question.answer = createQuestionDto.answer;

    return question.save();
  }

  async remove(id: string): Promise<void> {
    const question = await this.findOne(id);
    await question.destroy();
  }
}