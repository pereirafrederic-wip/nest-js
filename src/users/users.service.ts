import { Injectable } from '@nestjs/common';
import { IUsers } from './IUsers';

@Injectable()
export class UsersService {
  users: Array<IUsers> = [];

  getUsers(): Array<IUsers> {
    return this.users;
  }
}
