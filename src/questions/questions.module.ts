import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { Question } from './question.model';

@Module({
  providers: [QuestionsService],
  controllers: [QuestionsController],
  imports: [SequelizeModule.forFeature([Question])],
  exports: [SequelizeModule]
})
export class QuestionsModule {}