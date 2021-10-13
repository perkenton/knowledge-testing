import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { QuestionsController } from './questions/questions.controller';

@Module({
  imports: [
    // SequelizeModule.forRoot({
    //   dialect: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'knowledgeOld',
    //   autoLoadModels: true,
    //   synchronize: true,
    //   models: [ knowledgeOld ],
    // }),
  ],
  controllers: [AppController, UsersController, QuestionsController],
  providers: [AppService],
})
export class AppModule {}
