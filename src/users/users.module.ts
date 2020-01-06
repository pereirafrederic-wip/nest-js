import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

//mongo
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './db/users.schema';
import { UsersProviders } from './db/users.providers';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService, ...UsersProviders],
})
export class UsersModule {}
