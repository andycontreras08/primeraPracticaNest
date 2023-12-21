// todo.dto.ts
import { TodoStatus } from "./todo.schema";
import { IsNotEmpty, IsString, IsEnum, IsOptional } from "class-validator";

export class createTodoDto {
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    title: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    description?: string;

    @IsEnum(TodoStatus)
    @IsOptional()
    status?: TodoStatus;
}

export class updateTodoDto {
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    title?: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    description?: string;

    @IsEnum(TodoStatus)
    @IsOptional()
    status?: TodoStatus;
}
