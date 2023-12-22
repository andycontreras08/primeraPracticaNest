import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://jhernandez:hayhainformatic08@andresmda.nuip01q.mongodb.net/tasks?retryWrites=true&w=majority'
        )
    ],
    exports: [MongooseModule]
})
export class ConexionModule {}
