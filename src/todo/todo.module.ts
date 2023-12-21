// todo.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './todo.schema';
import { TodoRepository } from './todo.repository';
import { TodoController } from './todo.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Todo.name,
            schema: TodoSchema,
        }])
    ],
    controllers: [TodoController],
    providers: [TodoRepository],
})
export class TodoModule {}
