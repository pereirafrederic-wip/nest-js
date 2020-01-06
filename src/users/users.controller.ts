import {
  Controller,
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  // HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';

//db
import { CreateUserDto } from './db/create-user.dto';
import { IUsers } from './db/IUsers';

//swagger
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

@Controller('users')
@ApiUseTags('todos')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async findAll() //@Response() res
  {
    const users = await this.usersService.findAll();
    //return res.status(HttpStatus.OK).json(users);
    return users;
  }

  @Get(':id')
  public async findOne(
    @Param() param,
    //, @Response() res
  ) {
    const user = await this.usersService.findById(param.id);
    //  return res.status(HttpStatus.OK).json(user);
    return user;
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  public async create(
    @Body() user: CreateUserDto,
    //, @Response() res
  ) {
    const userCreated = await this.usersService.create(user);
    //return res.status(HttpStatus.OK).json(userCreated);
    return userCreated;
  }

  @Put()
  public async update(
    @Body() user: IUsers,
    //, @Response() res
  ) {
    const userUpdated = await this.usersService.update(user);
    //return res.status(HttpStatus.OK).json(userUpdated);
    return userUpdated;
  }

  @Delete(':id')
  public async delete(
    @Param() param,
    //, @Response() res
  ) {
    const id = await this.usersService.delete(param.id);
    //return res.status(HttpStatus.OK).json(string);
    return id;
  }
}
