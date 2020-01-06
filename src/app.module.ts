import { Module, RequestMethod } from '@nestjs/common';

//partie app
import { AppController } from './app.controller';
import { AppService } from './app.service';

// module users
import { UsersModule } from './users/users.module';

//partie db
import { MongooseModule } from '@nestjs/mongoose';

//partie middle ware
import { NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost/users')],
  controllers: [AppController],
  providers: [AppService, DatabaseModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        //cors(), helmet(),
        LoggerMiddleware,
      )
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
