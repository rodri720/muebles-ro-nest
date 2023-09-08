import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

@Module({
  imports:[MongooseModule.forRoot(
    'mongodb+srv://muebles-rosarito:rosarito@cluster0.szchc0l.mongodb.net/mueblesRosarito?retryWrites=true&w=majority'
    ), TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
