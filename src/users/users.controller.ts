import {
  Controller,
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IUsers } from './db/IUsers';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Array<IUsers> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): IUsers {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() user: CreateUserDto): IUsers {
    return this.usersService.create(user);
  }

  @Put()
  update(@Body() user: CreateUserDto): IUsers {
    return this.usersService.update(user);
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return this.usersService.delete(id);
  }
}
