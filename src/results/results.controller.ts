import {
  Controller,
  Param,
  Body,
  HttpCode,
  Header,
  Get,
  Post,
  HttpStatus,
  HttpException
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateResultDto } from './dto/create-result.dto';
import { ResultsService } from './results.service';
import { Result } from './result.model';


@ApiTags('Results')
@Controller('api/results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Get all results', type: [Result] })
  findAll(): Promise<Result[]> {
    return this.resultsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Get result by id', type: Result })
  @ApiResponse({ status: 404, description: 'Result not found' })
  findOne(@Param('id') id: string): Promise<Result> {
    const result = this.resultsService.findOne(id);
    if(!result) { // TODO: проверка не работает
      throw new HttpException(
        'Result with id=' + id + ' not exists',
        HttpStatus.NOT_FOUND
      )
    }
    return result;
  }

  @Post()
  @ApiResponse({ status: 200, description: 'Create result', type: Result })
  @ApiBody({ type: CreateResultDto })
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createResultDto: CreateResultDto): Promise<Result> {
    return this.resultsService.create(createResultDto);
  }
}

