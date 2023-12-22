import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export enum TodoStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED'
}

@Schema()
export class Todo extends Document {

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ default: TodoStatus.PENDING })
    status: TodoStatus;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
