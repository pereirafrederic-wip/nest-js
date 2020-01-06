import { Injectable } from '@nestjs/common';
import { IUsers } from './IUsers';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';

@Injectable()
export class UsersService {
  users: Array<IUsers> = [];

  getUsers(): Array<IUsers> {
    return this.users;
  }

  pushUser(user: IUsers): number {
    user.id = randomStringGenerator();
    this.users.push(user);
    return user.id;
  }
}
