import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

import { Result } from './result.model';
import { CreateResultDto } from './dto/create-result.dto';

@Injectable()
export class ResultsService {
  constructor(
    private sequelize: Sequelize,
    @InjectModel(Result)
    private resultModel: typeof Result,
  ) {}


  async findAll(): Promise<Result[]> {
    return this.resultModel.findAll()
  }

  async findOne(id: string): Promise<Result> {
    return this.resultModel.findOne({
      where: {
        id,
      },
    });
  }

  async create(createResultDto: CreateResultDto): Promise<Result> {
    const result = new Result();
    result.userId = createResultDto.userId;
    result.questionId = createResultDto.questionId;
    result.isCorrect = createResultDto.isCorrect;

    return result.save();
  }
}