import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

//mongo
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { UserSchema } from './db/users.schema';
import { CreateUserDto } from './db/create-user.dto';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: getModelToken('User'),
      useValue: CreateUserDto,
    },
  ],
})
export class UsersModule {}
