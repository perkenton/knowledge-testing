import { Controller, Param, Body, Redirect, HttpCode, Header, Req, Res, Get, Post, Delete, Put, HttpStatus } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response, Request } from 'express';

@Controller('users')
export class UsersController {

  // @Get()
  // // @Redirect('https://ya.ru', 301)
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('Chao')
  //   return 'getAll';
  // }

  @Get()
  getAll(): string {
    return 'getAll';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne ' + id;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createUserDto: CreateUserDto): string {
    return `Name: ${createUserDto.name}, Surname: ${createUserDto.surname}, Patronymic: ${createUserDto.patronymic}`;
  }

  @Delete(":id")
  remove(@Param('id') id: string) {
    return 'Remove ' + id;
  }

  @Put(":id")
  update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string) {
    return 'Update ' + id + `Name: ${updateUserDto.name}, Surname: ${updateUserDto.surname}, Patronymic: ${updateUserDto.patronymic}`
  }
}
