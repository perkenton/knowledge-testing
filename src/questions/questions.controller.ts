import {
  Controller,
  Param,
  Body,
  HttpCode,
  Header,
  Get,
  Post,
  Delete,
  HttpStatus,
  HttpException
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionsService } from './questions.service';
import { Question } from './question.model';


@ApiTags('Questions')
@Controller('api/questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Get all questions', type: [Question] })
  findAll(): Promise<Question[]> {
    return this.questionsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Get question by id', type: Question })
  @ApiResponse({ status: 404, description: 'Question not found' })
  findOne(@Param('id') id: string): Promise<Question> {
    const question = this.questionsService.findOne(id);
    if(!question) { // TODO: проверка не работает
      throw new HttpException(
        'Question with id=' + id + ' not exists',
        HttpStatus.NOT_FOUND
      )
    }
    return question;
  }

  @Post()
  @ApiResponse({ status: 200, description: 'Create question', type: Question })
  @ApiBody({ type: CreateQuestionDto })
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createQuestionDto: CreateQuestionDto): Promise<Question> {
    return this.questionsService.create(createQuestionDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Delete question' })
  @ApiResponse({ status: 404, description: 'Question not found' })
  remove(@Param('id') id: string): Promise<void> {
    return this.questionsService.remove(id);
  }
}

