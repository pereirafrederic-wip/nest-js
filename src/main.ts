import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//middleware
import { GlobalMiddleware } from './middleware/global.middleware';

//swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //middleware
  app.use(GlobalMiddleware);
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Users example')
    .setDescription('The Users API description')
    .setVersion('1.0')
    //.addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
