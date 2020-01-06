import { Controller, Get, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUsers } from './IUsers';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): Array<IUsers> {
    return this.usersService.getUsers();
  }

  @Put()
  putUsers(user: IUsers): number {
    return this.usersService.pushUser(user);
  }
}
