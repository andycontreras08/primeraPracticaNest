import { Injectable } from "@nestjs/common";
import { Model, Document } from "mongoose";

@Injectable()
export class GenericRepository<T extends Document> {
    constructor(private readonly model: Model<T>) {}

    async create(item: any): Promise<T> {
        const newItem = new this.model(item);
        return newItem.save();
    }

    async update(id: string, item: any): Promise<T | null> {
        return this.model.findByIdAndUpdate(id, item, { new: true }).exec();
    }

    async findAll(): Promise<T[]> {
        return this.model.find().exec();
    }

    async findOne(id: string): Promise<T | null> {
        return this.model.findById(id).exec();
    }

    async delete(id: string): Promise<T | null> {
        try {
            const deletedItem: any = await this.model.findByIdAndDelete(id).exec();
            return deletedItem;
        } catch (error) {
            console.error(`Error al eliminar el elemento con ID ${id}: ${error.message}`);
            return null;
        }
    }
}
