import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://jhernandez:hayhainformatic08@andresmda.nuip01q.mongodb.net/tasks?retryWrites=true&w=majority'
        ),
        TodoModule,
    ]
})
export class AppModule {}
