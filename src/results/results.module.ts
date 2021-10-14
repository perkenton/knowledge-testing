import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { Result } from './result.model';

@Module({
  providers: [ResultsService],
  controllers: [ResultsController],
  imports: [SequelizeModule.forFeature([Result])],
  exports: [SequelizeModule]
})
export class ResultsModule {}