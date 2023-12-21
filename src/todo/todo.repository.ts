import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"; // Añadir esta importación
import { Model } from "mongoose";
import { Todo } from "./todo.schema";
import { GenericRepository } from "../generic/generic.repository";

@Injectable()
export class TodoRepository extends GenericRepository<Todo> {
    constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {
        super(todoModel);
    }
}
