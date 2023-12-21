// todo.controller.ts
import { Controller, Post, Body, ValidationPipe, Put, Get, Delete, Param } from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { createTodoDto, updateTodoDto } from './todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private todoRepository: TodoRepository) {}

    @Post()
    async create(@Body(new ValidationPipe()) createTodo: createTodoDto){
        return this.todoRepository.create(createTodo);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body(new ValidationPipe()) updateTodo: updateTodoDto){
        return this.todoRepository.update(id, updateTodo);
    }

    @Get()
    async findAll(){
        return this.todoRepository.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return this.todoRepository.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.todoRepository.delete(id);
    }
}