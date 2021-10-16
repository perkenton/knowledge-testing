import {
  Controller,
  Param,
  Body,
  HttpCode,
  Header,
  Get,
  Post,
  HttpStatus
} from '@nestjs/common';
import { CreateResultDto } from './dto/create-result.dto';
import { ResultsService } from './results.service';
import { Result } from './result.model';


@Controller('api/results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get()
  findAll(): Promise<Result[]> {
    return this.resultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Result> {
    return this.resultsService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createResultDto: CreateResultDto): Promise<Result> {
    return this.resultsService.create(createResultDto);
  }
}

