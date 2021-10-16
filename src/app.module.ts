import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './questions/questions.module';
import { ResultsModule } from './results/results.module';


@Module({
  imports: [
    UsersModule,
    QuestionsModule,
    ResultsModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'knowledgeTesting',
      autoLoadModels: true,
      synchronize: true,
      // sync: { force: true } // TODO
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
